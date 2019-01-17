import React from 'react'
import posed from 'react-pose'

import Daenerys from '../../Images/daenerys.jpg'
import Jon from '../../Images/jon-snow.jpeg'
import Arya from '../../Images/arya-stark.jpg'
import Tyrion from '../../Images/tyrion-lannister.png'
import CharacterItem from './CharacterItem';

const characterInfo = [
    {
        pos: 0,
        name: "Tyrion Lannister",
        description: "Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces.",
        image: Tyrion   
    },
    {
        pos: 1,
        name: "Jon Snow",
        description: "Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's brother, and raised by Eddard alongside his lawful children at Winterfell but his true parentage is kept secret from everyone, including Jon himself.",
        image: Jon
    },
    {
        pos: 2,
        name: "Arya Stark",
        description: "Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.",
        image: Arya
    },
    {
        pos: 3,
        name: "Daenerys Targaryen",
        description: "Queen Daenerys Targaryen, also known as Dany and Daenerys Stormborn, is the younger sister of Rhaegar Targaryen and Viserys Targaryen and only daughter of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon's rebellion.",
        image: Daenerys
    }
]



class CharacterCarousel extends React.Component {

    state = {
        characterInfo: characterInfo
    }

    handleClick = (dir) => () => {
        const info = this.state.characterInfo;
        console.log(info.length)
        const newArray = [...info]

        info.forEach((el, i) => {
            let {pos} = el;
            if(pos === 3){
                newArray[i].pos = dir > 0 ? 0 : 2;
            }else if(pos === 0){
                newArray[i].pos = dir > 0 ? 1 : 3; 
            }else {
                newArray[i].pos += dir;
            }
        });
        this.setState({characterInfo: newArray})

    }

    renderItems = () => {
        const obj = [];
        characterInfo.forEach((item, i) => (
            obj.push(<CharacterItem key={i} handleClick={this.handleClick} isVisible={i===1 ? true : false} character={item}/>)
        ))
        return obj;
    }

    render() {
        return (
            <div className="carousel">
                {
                    this.renderItems()
                }
            </div>
        )
    }
}

export default CharacterCarousel
