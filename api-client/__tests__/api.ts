import {Pet, PetApiFp, PetStatusEnum} from "../api";
import {AxiosResponse} from "axios";


describe("PetStore Api", ()=>{

    const perApi = PetApiFp();

    const pet: Pet = {
        "id": 298216391263929832,
        "name": "Ngong Dog",
        "photoUrls": [
            "https://www.smklexyrepo.com/2658223124.jpg",
            "https://www.smklexyrepo.com/2875265132.jpg",
        ]
    };

    it ("Should create a pet", async ()=> {
        const response : Promise<any> = perApi.addPet(pet);

        const val: AxiosResponse<Pet> = await response;

        // expect(val.status).toBeUndefined();
        /* IF A PET IS ACTUALLY CREATED, THE RETURNED ID SHOULD BE GREATER THAN ZERO */
        expect(val.status).toBe(201);
        expect(val.data["id"]).toBeGreaterThan(0);
    });

    it ("Should update an existing pet", async ()=> {
        const response : Promise<any> = perApi.updatePet({...pet, name: "Smart Dog"});

        const val: AxiosResponse<Pet> = await response;

        // expect(val.status).toBeUndefined();
        /* IF A PET IS ACTUALLY UPDATE, THE RETURNED NAME SHOULD BE THE ONE SET ABOVE */
        expect(val.data["name"]).toBe("Smart Dog");
    });

});
