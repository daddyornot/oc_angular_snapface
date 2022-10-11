import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: "Kanagawa",
          description: "Vague de Kanagawa - Japon - 1831",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg",
          createdDate: new Date(),
          snaps: 54,
          location: "Kanagawa"
        },
        {
          id: 2,
          title: "Kitsune",
          description: "Kasai Kitsune - Renard brulant a neuf queues",
          imageUrl: "https://cdn.shopify.com/s/files/1/0606/7260/6439/files/Kasai_Kitsune_480x480.jpg?v=1639474688",
          createdDate: new Date(),
          snaps: 0,
          location: "Japon"
        },
        {
          id: 3,
          title: "Amaterasu",
          description: "Amaterasu - Dieu du Soleil au Japon",
          imageUrl: "https://thumbs.dreamstime.com/z/shinto-d%C3%A9esse-de-la-mythologie-du-soleil-d-amaterasu-art-vecteur-203296709.jpg",
          createdDate: new Date(),
          snaps: 0,
        },
        {
          id: 4,
          title: "Kanagawa",
          description: "Vague de Kanagawa - Japon - 1831",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg",
          createdDate: new Date(),
          snaps: 0,
          location: "Kanagawa"
        },
        {
          id: 5,
          title: "Kitsune",
          description: "Kasai Kitsune - Renard brulant a neuf queues",
          imageUrl: "https://cdn.shopify.com/s/files/1/0606/7260/6439/files/Kasai_Kitsune_480x480.jpg?v=1639474688",
          createdDate: new Date(),
          snaps: 0,
          location: "Japon"
        },
        {
          id: 6,
          title: "Amaterasu",
          description: "Amaterasu - Dieu du Soleil au Japon",
          imageUrl: "https://thumbs.dreamstime.com/z/shinto-d%C3%A9esse-de-la-mythologie-du-soleil-d-amaterasu-art-vecteur-203296709.jpg",
          createdDate: new Date(),
          snaps: 0,
        }
      ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found");
    } else {
      return faceSnap;
    }

  }

  snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsnap"): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}




