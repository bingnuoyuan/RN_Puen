import { Dimensions } from "react-native"; //计算屏幕相关尺寸

const {width: viewportwidth,height: viewportheight} = Dimensions.get('window');

//根据百分比获取宽度
function wp(percentage: number){
    const value = (percentage*viewportwidth) / 100;
    return Math.round(value); //四舍五入
}

function hp(percentage: number){
    const value = (percentage*viewportheight) / 100;
    return Math.round(value); //四舍五入
}
export {
    viewportwidth,
    viewportheight,
    wp,
    hp
}