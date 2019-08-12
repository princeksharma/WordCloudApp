import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './WordCloudStyle.css';
import ReactTooltip from 'react-tooltip';

class WordCloudComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            fontSizer: [],
            maxFont: 40,
            minFont: 10,
        };
    }
    
    handleFontSize = () => {
            this.setState({
                maxFont: this.props.maxFont ? this.props.maxFont : 40,
                minFont: this.props.minFont ? this.props.minFont : 10,
            },()=>{
                if(this.props.data.length !== 0) {
         
                    if(this.props.data.length > 1){
            
                        const ValueDifference = this.props.data[0].value- this.props.data[this.props.data.length-1].value;
                        const PxDifference = this.state.maxFont - this.state.minFont;
 
                        this.props.data.map((item)=>{
                            const ItemValueDifference = this.props.data[0].value - item.value === 0 ? 1: this.props.data[0].value - item.value;
                            let NewFontSize = this.state.maxFont-((PxDifference / ValueDifference)*ItemValueDifference);

                            let localFontSizer = this.state.fontSizer;
                            localFontSizer.push(NewFontSize);
                            this.setState({
                                fontSizer : localFontSizer
                            });
                            return item;
                        });
                    } else {
                        this.setState({
                            fontSizer: [this.props.maxFont],
                        });
                    }
                }
            });



    }
    componentDidMount() {
        // console.log(this.props);
        this.handleFontSize();
    }
    render() {
        return(
            <div className="container-react-word-cloud" style={this.props.width === 'auto' ? {width: '98.5%'}: {width: this.props.width}}>
                {this.props.data.length > 0 ? this.props.data.map((item,i)=>
                        <span key={i} style={{
                            color: this.props.color[Math.floor(Math.random()*100)%this.props.color.length],
                            fontSize: this.props.logFunc ? this.props.logFunc(item.value) : this.state.fontSizer[i],
                        }}>
                        <div data-tip={"Value: "+item.value} data-event='click focus' onClick={()=>this.props.clickEvent ? this.props.clickEvent(item) : ''}> {item.word} </div>
                            <ReactTooltip place="top" type="dark" effect="solid" globalEventOff='click'/>
                        </span>
                ) : <span>No Data</span>}
            </div>
        )
    }
}
WordCloudComponent.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    data: PropTypes.array,
    color: PropTypes.array,
    clickEvent: PropTypes.func,
    maxFont: PropTypes.number,
    minFont: PropTypes.number
};

export default WordCloudComponent;