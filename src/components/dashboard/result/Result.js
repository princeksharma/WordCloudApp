import React, { Component } from 'react';
import './MainStyle.css';
import { WordCloud } from "./lib";

class Result extends Component {
    constructor(props){
        super(props);
        this.state ={
            WordCloudData : [
                {
                    "word":"gt feature recipe",
                    "value":275
                },
                {
                    "word":"searchknorrproduct service feature",
                    "value":275
                },
                {
                    "word":"service feature item",
                    "value":275
                },
                {
                    "word":"type gt feature",
                    "value":275
                },
                {
                    "word":"details feature ","value":112},{"word":"details service details","value":112},{"word":"service details feature","value":112},{"word":"customerreview value yes","value":105},{"word":"feature item soup","value":104},{"word":"item soup type","value":104},{"word":"soup type gt","value":104},{"word":"feature item noodles","value":88},{"word":"item noodles type","value":88},{"word":"noodles type gt","value":88},{"word":"crispy chicken fry","value":87},{"word":"chicken fry mix","value":83},{"word":"feature item crispy","value":83},{"word":"fry mix type","value":83},{"word":"item crispy chicken","value":83},{"word":"mix type gt","value":83},{"word":"customerreview value no","value":67},{"word":" topic recipe","value":64},{"word":"managesubscription service ","value":64},{"word":"service  topic","value":64},{"word":" subscription ","value":30},{"word":"feature  ","value":30},{"word":"feedback  subscription","value":30},{"word":"userfeedback feedback ","value":30},{"word":"service subscription subscribe","value":28},{"word":"subscription service subscription","value":28},{"word":"recipe repetition weekly","value":25},{"word":"subscribe yes topic","value":25},{"word":"subscription subscribe yes","value":25},{"word":"topic recipe repetition","value":25},{"word":"yes topic recipe","value":25},{"word":"  bn","value":19},{"word":"i want to","value":15},{"word":"  en","value":11},{"word":"do you have","value":10},{"word":"knorr kothay pawa","value":8},{"word":"kothay pawa jay","value":8},{"word":"the price of","value":8},{"word":"cup a soup","value":7},{"word":"where i can","value":7},{"word":"want to buy","value":6},{"word":"how can i","value":5},{"word":"i can get","value":5},{"word":"i like it","value":5},{"word":"price of knorr","value":5},{"word":"chicken fry m","value":4},{"word":"er price koto","value":4},{"word":"give me a","value":4},{"word":"https www.youtube.com watch","value":4},{"word":"i am looking","value":4},{"word":"i don't find","value":4},{"word":"kothai pawa jabe","value":4},{"word":"not available in","value":4},{"word":"please give me","value":4},{"word":"price of soups","value":4},{"word":"thanks for your","value":4},{"word":"to buy knorr","value":4},{"word":"would like to","value":4},{"word":"www.youtube.com watch v","value":4},{"word":"এর জিনিস কি","value":4},{"word":"জিনিস কি আছে","value":4},{"word":"ডিলার নিতে চাই","value":4},{"word":"নর এর জিনিস","value":4},{"word":"  id","value":3},{"word":" er ashe","value":3},{"word":" id ","value":3},{"word":"add to dry","value":3},{"word":"already told u","value":3},{"word":"are no english","value":3},{"word":"available in bangladesh","value":3},{"word":"buy knorr cup","value":3},{"word":"can find this","value":3},{"word":"can get it","value":3},{"word":"chicken corn soup","value":3},{"word":"crispy fried chicken","value":3},{"word":"cup soup ta","value":3},{"word":"cup soup.but i","value":3},{"word":"don't find in","value":3},{"word":"er ashe pashe","value":3},{"word":"find in market","value":3},{"word":"fried chicken mix","value":3},{"word":"give me the","value":3},{"word":"gulshan  er","value":3},{"word":"hello i need","value":3},{"word":"how are you","value":3},{"word":"how much water","value":3},{"word":"how to get","value":3},{"word":"https m.facebook.com story.php","value":3},{"word":"i am in","value":3},{"word":"i can find","value":3},{"word":"i did not","value":3},{"word":"i do not","value":3},{"word":"i help you","value":3},{"word":"i need knorr","value":3},{"word":"i wanted to","value":3},{"word":"in market of","value":3}]
        }
    }

    render() {
        return(
            <div>
                <WordCloud 
                    width={"auto"} 
                    maxFont={40} 
                    minFont={10} 
                    logFunc={(x)=> Math.log2(x) * 5} 
                    data={this.state.WordCloudData} 
                    clickEvent={(x)=>console.log(x.word)} 
                    color={['#71803F', '#F8AC1D','#598EC0','#E2543E','#1A3051','#F46F73','#8A87BB','#56CFCD','#297373','#FF8552','#F2E863','#C2F8CB','#3A6EA5','#FF6700','#C0C0C0','#4E4381','#523CBD',]}
                />
            </div>
        )
    }
}

export default Result;