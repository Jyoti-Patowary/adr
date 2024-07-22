import VehicleListings from "../components/vehicleListing";

export default function Vehicles() {


    return(
        <div className="pt-24 flex justify-center bg-white">
        <VehicleListings isVehiclesPage={true}/>
        </div>
    )
}