function App() {
    return (
        <div>
            <Person
                name="Elon"
                age={44}
                hobbies={["eating tacos", "driving tesla", "hanging out"]}
            />
            <Person
                name="Joe" 
                age={55}
                hobbies={["podcasting", "stand-up compedy"]}
            />
            <Person
                name="Andrew"
                age={51}
                hobbies={["reading", "experimenting", "podcasting"]}
            />
        </div>
    );
}
