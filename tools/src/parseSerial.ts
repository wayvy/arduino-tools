export const parseSerial = (res, pinList, wordDelimiter) => {
    let resArr = res.split(wordDelimiter);
    let dataType = '';

    // idunno fix
    if(resArr[0][0] === '�' || resArr[0][5] === '`'){
        dataType = 'sample';
    } else {
        dataType = resArr[0];
    }

    switch(dataType){
        case 'sample':
            let pinN = resArr[1];
            if(pinN > 13){
                pinN = `A${pinN-14}`
            }
            let value = resArr[2];
            let timeStamp = resArr[3];
            pinList.add(pinN, value, timeStamp);
            break;
        default:
            console.log('dataType case default');
            console.log(res);
    }
}