import {useState, useEffect} from "react";


const logos = [{name: 'Chelsea', src: '/Chelsea.png'}, {name: 'Barcelona', src: '/Barcelona.png'},
    {name: 'Bayren', src: '/Bayren.png'}, {name: 'Benfica', src: '/Benfica.png'},
    {name: 'Real Madrid', src: '/Real Madrid.png'}, {name: 'Inter', src: '/Inter.png'},
    {name: 'Liverpool', src: '/Liverpool.png'}, {name: 'Milan', src: '/Milan.png'},
    {name: 'Paris', src: '/Paris.png'}, {name: 'Tottenham', src: '/Tottenham.png'},
    {name: 'Dortmund', src: '/Dortmund.png'}, {name: 'Napoli', src: '/Napoli.png'}
]


function MatchResult(props) {

    let match = props.data


    let [teamName1, setTeam1Name] = useState(null)
    const [teamName2, setTeam2Name] = useState(null)
    const [logoTeam1, setLogoTeam1] = useState(null)
    const [logoTeam2, setLogoTeam2] = useState(null)

    // useEffect(() => {
    //     setTeam1Name(match.team1.name)
    //     setTeam2Name(match.team2.name)
    //     // findLogo(teamName1,teamName2)
    //     // console.log(logoTeam1)
    // },[]);

    //
    // const findLogo = (teamName1, teamName2) => {
    //     // eslint-disable-next-line array-callback-return
    //     logos.map((logo) => {
    //         if (logo.name === teamName1) {
    //             setLogoTeam1(logo.src);
    //
    //         } else if (logo.name === teamName2) {
    //             setLogoTeam2(logo.src);
    //         }
    //     })
    // }


    return (
        <div >
            <div style={{
                fontFamily: "cursive",
                marginLeft: 900,
                marginTop: 40,
                borderRadius: 20,
                boxShadow: 'rgb(30, 57, 77) 10px 20px 30px 10px',
                maxWidth: 1500,
                textAlign: "center",

            }}>
                <div style={{
                    fontSize: 80,
                    display: 'inline-block',
                    color: match.team1_goals === match.team2_goals ? 'black' : (match.team1_goals > match.team2_goals ? 'green' : 'red') ,
                    padding: 25
                }}> {match.team1.name}</div>
                <div style={{
                    fontSize: 80,
                    display: 'inline-block',
                    color: "black",
                    padding: 25,
                }}> {match.team1_goals}</div>
                <div style={{
                    fontSize: 80,
                    display: 'inline-block',
                    color: "black",
                    padding: 25
                }}>-
                </div>
                <div style={{
                    fontSize: 80,
                    display: 'inline-block',
                    color: "black",
                    padding: 25
                }}> {match.team2_goals}</div>
                <div style={{
                    fontSize: 80,
                    display: 'inline-block',
                    color: match.team1_goals === match.team2_goals ? 'black' : (match.team1_goals < match.team2_goals ? 'green' : 'red') ,
                    padding: 25
                }}> {match.team2.name}</div>

            </div>
        </div>


    )
}

export default MatchResult

