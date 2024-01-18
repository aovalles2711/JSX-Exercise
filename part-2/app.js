function App() {
    return (
        <div>
            <Tweet
                name="Jason Kelce"
                username="JKelce"
                date={new Date().toDateString()}
                message="This app is great!"
            />
            <Tweet
                name="Elon Musk"
                username="musky"
                date={new Date().toDateString()}
                message="#twitterfingers"
            />
            <Tweet
                name="Joe Rogan"
                username="JoeyTwitterFingerz"
                date={new Date().toDateString()}
                message="Follow me on Twitter!"
            />
        </div>
    );
}
