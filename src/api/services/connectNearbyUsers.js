/* global google */

export const GoogleDistanceAPI = async (origin, destination) => {
    const service = new google.maps.DistanceMatrixService();

    // build request
    const request = {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    };

    // get distance matrix response
    const res = await service.getDistanceMatrix(request)
    return res;
  }