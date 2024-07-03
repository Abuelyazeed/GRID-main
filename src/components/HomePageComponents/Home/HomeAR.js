import {TopSliderAR, AboutGridAR, BecomeAMemberAR} from "../../index"
import Directory from "../../../utilities/Directory"
if (sessionStorage.getItem("language") === Directory.EN){
    import("../../../assets/scss/style-en.scss");
    window.location.reload();
}


const HomeAR = () => {
    return (
        <>
            <TopSliderAR/>
            <AboutGridAR/>
            <BecomeAMemberAR/>
        </>)
}

export default HomeAR