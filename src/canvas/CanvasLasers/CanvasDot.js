import { CanvasProperties } from "../CanvasProperties";
import * as THREE from "three";
import { CanvasLogic } from "../CanvasLogic";

export class CanvasDot extends CanvasProperties {

    drawDot() {
        const dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(
            new THREE.Vector3(0, 0, 0),
        );
        const dotMaterial = new THREE.PointsMaterial({ size: 2, sizeAttenuation: false, color: 0x2ce8cd });
        const dot = new THREE.Points(dotGeometry, dotMaterial);
        CanvasLogic.canvasDots.push(dot);
        this.scene.add(dot);
    }
}