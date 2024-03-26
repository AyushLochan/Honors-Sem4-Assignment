function printTableOfThree(){
    for(let i=1;i<=10;i++){
        let result="";
        let sum=0;
        for (let j=1;j<=i;j++){
            sum+=3;
            if(j===1) {
                result+="";
            }else{
                result+="+3";
            }
        }
        console.log(`3*${i}=3${result}=${sum}`);
    }
}

printTableOfThree();