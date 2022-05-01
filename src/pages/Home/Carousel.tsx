import { viewportwidth,wp,hp } from "@/utils/index";
import React from "react";
import { StyleSheet, Image } from "react-native";
import SnapCarousel, { AdditionalParallaxProps } from "react-native-snap-carousel";

const data = [
    "https://img.mianfeiwendang.com/pic/65133e4129b6446aa22c9f9f/1-810-jpg_6-1080-0-0-1080.jpg",
    "https://img.mianfeiwendang.com/pic/65133e4129b6446aa22c9f9f/1-810-jpg_6-1080-0-0-1080.jpg",
    "https://img.mianfeiwendang.com/pic/65133e4129b6446aa22c9f9f/1-810-jpg_6-1080-0-0-1080.jpg",
    "https://img.mianfeiwendang.com/pic/65133e4129b6446aa22c9f9f/1-810-jpg_6-1080-0-0-1080.jpg",
]

const testImage = "https://www.keaidian.com/uploads/allimg/190424/24110307_20.jpg"

const sliderWidth = viewportwidth; //屏幕宽度
const sidewith = wp(90);
const sideheight = hp(26);
const itemWidth = sidewith+ wp(2)*2

class Carousel extends React.Component {
    renderItem = ({item}:{item: string})=> {
        return (
            <Image style={style.image} source={{uri: item}} />
        )
    }
    render(){
        // return <SnapCarousel
        //     data={data} 
        //     renderItem={this.renderItem} 
        //     sliderWidth={sliderWidth}
        //     itemWidth={itemWidth} 
        // />
        return(
            <Image
            style={{width: 90, height: 90}}
                source={require('@/assets/view.jpeg')}
                resizeMethod="resize"
            />
        )
    }
}

const style = StyleSheet.create({
    image: {
        width: itemWidth,
        height:sideheight
    }
})

export default Carousel;