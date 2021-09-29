
interface rateProps{
    rateTotal: any;
}
export default function Rating(props: rateProps){
    const {rateTotal} = props

    let rateList = [false, false, false, false, false];

    for (let i = 0; i < 4; i++) {
        if(i < rateTotal){
            rateList[i] = true
        }
    }
    return (
        <>{
            rateList.map((data, index)=>{
                if(data) {
                    return <span key={index} className="fa fa-star text-yellow-500"></span>
                }else{
                    return <span key={index} className="fa fa-star"></span>
                }
            })
        }
        </>
    )


}