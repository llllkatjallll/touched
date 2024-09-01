import { Behaviour, serializable } from "@needle-tools/engine";
import { Object3D } from "three";

// Documentation → https://docs.needle.tools/scripting

export class ObjectSwitcher extends Behaviour {

    @serializable()
    objects: Object3D[] = [];

    currentObjectIndex: number = 0;
    
    start() {
    }

   //function to switch to the next object
   // set

   switchToNextObject() {

    // hide all objects
    
    this.objects.forEach(object => {
        object.visible = false;
    });


    this.currentObjectIndex = (this.currentObjectIndex + 1) % this.objects.length;



    this.objects.forEach((object, index) => {
        object.visible = index === this.currentObjectIndex;
    });
}
}