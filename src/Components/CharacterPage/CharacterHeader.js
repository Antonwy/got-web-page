import React from 'react'
import Axios from 'axios';
import posed from 'react-pose';


const Header = posed.h1({
    visible: {opacity: 1, x: 0, transition: {duration: 500}},
    hidden: {opacity: 0, x: -100}
})

const Description = posed.p({
    visible: {opacity: 1, x: 0, transition: {duration: 500}, delay: 250},
    hidden: {opacity: 0, x: -100}
})

const UList = posed.ul({
    visible: {
        staggerChildren: 100,
        x: 0
    },
    hidden: {x: -100}
})

const ListItem = posed.li({
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
})

const BigListItem = posed.div({
    visible: {opacity: 1},
    hidden: {opacity: 0}
})

const VideoButton = posed.p({
    visible: {opacity: 1, x: 0, delay: 500, transition: {duration: 500}},
    hidden: {opacity: 0, x: -100}
})

class CharacterHeader extends React.Component {

    state = {
        character: undefined,
        isVisible: false,
        showMore: false,
        animateMore: false,
    }

    componentDidMount(){
        Axios.get(`https://www.anapioficeandfire.com/api/characters?name=${this.props.character.name}`)
            .then(res => {
                this.setState({
                    character: this.getData(res.data),
                }, () => {
                    this.setState({
                        isVisible: true
                    })
                })
            })
    }

    getData = (data) => {
        let obj = {
            name: data[0].name,
            aliases: data[0].aliases,
            titles: data[0].titles,
            gender: data[0].gender,
            born: data[0].born,
            culture: data[0].culture,
            playedBy: data[0].playedBy,
            tvSeries: data[0].tvSeries 
        }
        data.forEach(el1 => {
            Object.keys(obj).forEach(key => {
                if (this.checkLength(el1[key], obj[key])) {
                    obj[key] = el1[key];
                }  
            })
        });
        return obj;
    }

    checkLength = (el1, el2) => {
        if(Array.isArray(el1)){
            if(el1.length > el2.length){
                return true
            }else if(el1.length === el2.length && el1[0].length > el2[0].length){
                return true
            }else {
                return false
            }
        }else {
            return el1.length >= el2.length ? true : false;
        }
    }

    handleShowMore = () => {
        this.setState({showMore: !this.state.showMore}, () => {
            this.setState({animateMore: this.state.showMore})
        })
    }

    render() {
        const {character, isVisible, showMore, animateMore} = this.state;
        console.log(character)
        const anim = isVisible ? 'visible' : 'hidden';
        return (
            <div>
                {
                    character ?
                    <div className="characterHeader">
                        <Header pose={anim}>{character.name}</Header>
                        {
                            showMore ? 
                            <div>
                                <UList pose={animateMore ? "visible" : "hidden"} className="characterInfo">
                                    <BigListItem>
                                        <li><span>Aliases:</span></li>
                                        <UList>
                                            {character.aliases.map((item, i) => {
                                                return <ListItem key={i}>{item}</ListItem>
                                            })}
                                        </UList>
                                        <li><span>Titles:</span></li>
                                        <UList>
                                            {character.titles.map((item, i) => {
                                                return <ListItem key={i}>{item}</ListItem>
                                            })}
                                        </UList>
                                    </BigListItem>
                                    <BigListItem>
                                        <li><span>Gender: </span>{character.gender}</li>
                                        <li><span>Born: </span>{character.born}</li>
                                        <li><span>Culture: </span>{character.culture}</li>
                                        <li><span>Played by: </span>{character.playedBy[0]}</li>
                                        {/* <li><span>Tv-Series:</span></li>
                                        <UList pose={anim}>
                                            {character.tvSeries.map((item, i) => {
                                                return <ListItem key={i}>{item}</ListItem>
                                            })}
                                        </UList> */}
                                    </BigListItem>
                                </UList>
                                <button onClick={this.handleShowMore}>LESS</button>
                            </div>
                            :
                            <div className="shortCharacterInfo">
                                <Description pose={anim}>{this.props.character.description}</Description>
                                <div>
                                    <VideoButton className="watchVid" pose={anim}>Watch the Video <span onClick={this.props.handleClick(character)} className="here">here</span>.</VideoButton>
                                    <button onClick={this.handleShowMore}>MORE</button>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <div></div>
                }
            </div>
            
            
        )
    }
}

export default CharacterHeader
