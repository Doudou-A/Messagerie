import React from "react";

export default class NameDispo extends React.Component {
    // // componentDidMount() {
    // //     fetch(" https://localhost:8000")
    // //         .then(res => res.json())
    // //         .then(
    // //             (result) => {
    // //                 this.setState({
    // //                         isLoaded: true,
    // //                         cities: result.data,
    // //                     }
    // //                 );
    // //             },
    // //
    // //             (error) => {
    // //                 this.setState({
    // //                         isLoaded: true,
    // //                         error
    // //                     },
    // //                     console.log(error)
    // //                 );
    // //             }
    // //         )
    // //     this.setState({fetch});
    // // }
    //
    // handleClick = this.handleClick.bind(this);
    //
    // handleClick(event) {
    //     // var value = event.currentTarget.value;
    //     // var city = this.state.cities.find(ville => ville.villeId == this.props.value);
    //     // // var city = this.state.cities.filter( (ville) => ville > event.currentTarget.value);
    //     // console.log(city);
    //     //
    //     // // this.state.cities.map(cityComplet =>
    //     // //     if(cityComplet.villeId == city) return cityComplet
    //     // // );
    //     // if (city.villeId == 28334){
    //     //     this.setState({
    //     //         messages: ["Carrefour","planeteMode","KingJouet","MEILLEUR VILLE DE FRANCE !"," Kebab"," Coiffeur"]
    //     //     })
    //     // }else if (city.villeId == 28142){
    //     //     this.setState({
    //     //         messages: ["AUCHAN","Voisin de Pierre-Bénite"]
    //     //     })
    //     // }
    //     //
    //     // map.setCenter(new google.maps.LatLng(city.villeLatitudeDeg, city.villeLongitudeDeg));
    //     // map.setZoom(13);
    // }

    render() {
        // const {error, isLoaded, cities} = this.state;
        // if (error) {
        //     return <div>Erreur : {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Chargement…</div>;
        // } else {
            return (
                <p>
                    text
                    {/*{this.props.text}*/}
                    {/*{cities.map(city => (*/}
                    {/*    <div key={city.villeId}>*/}
                    {/*        <button value={city.villeId} onClick={this.handleClick} className={"city"}>*/}
                    {/*            {city.villeNom}*/}
                    {/*        </button>*/}
                    {/*        { this.state.messages ?*/}
                    {/*            <button className={"giv"}>{this.state.messages.map(message => (*/}
                    {/*                <ul>*/}
                    {/*                    <li>{message}</li>*/}
                    {/*                </ul>*/}
                    {/*            ))}*/}
                    {/*            </button>*/}
                    {/*            : null }*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </p>
            );
        }
    // }
}