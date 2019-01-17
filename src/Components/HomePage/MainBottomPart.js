import React from 'react'
import PopularLists from './PopularLists';
import Article from '../Article';

const MainBottomPart = ({isVisible}) => {
  return (
    <div className="mainBottomPart">
      <PopularLists isVisible={isVisible}/>
      <div className="storyArticle"><Article 
        header="The Story:"
        text="Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die."
        isVisible={isVisible}
        /></div>
    </div>
  )
}

export default MainBottomPart
