import ImageTextWrapper from "../components/ImageTextWrapper";
import UserImage from "../components/UserImage";

const Home = () => {
    return ( 
        <div className="Home">
            <h1 padding="100px">Hi, I'm Emmanuel!</h1>

            <ImageTextWrapper style={{display: "flex", justifyContent:"space-around"}}
                >
                <UserImage  image = {"cat200x300.jpg"} />
                <p style={{paddingLeft: "1.5rem"}}>
                    Hey! I'm <strong>Emmanuel</strong>, a 23-year-old Computer Science student at <strong>Concordia University</strong>, graduating in May 2024. 
                    On this website, I will be showcasing some of the projects I've been working on and write down a few thoughts on my blog.
                </p>
            </ImageTextWrapper>
            
            
        </div>
     );
}

export default Home;