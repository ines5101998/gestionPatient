import axios from "axios";

const PATIENTS_REST_API_URL ='http://localhost:8282/RestapiPatient/all';

class PatientService{

    getPatients(){
        return axios.get(PATIENTS_REST_API_URL)
    }
}

export default new PatientService();