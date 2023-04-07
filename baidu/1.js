const permutation =() =>{
    let ans = [] //热河排列结果放在这个数组里就可以了
    str = str.split('').sort((a,b)=>{
        return a > b ? 1: -1 
    }).join('')
    console.log(str)

    return []

}
permutation('baidu').indexOf('iabdu')