import {AnimationController} from "@ionic/angular";

export const initAnimation = (selector: string, animationController: AnimationController): any => animationController.create()
    .addElement(document.getElementsByName(selector))
    .duration(2000)
    .beforeStyles({
      opacity: 0.5
    })
    .afterClearStyles(['opacity'])
    .keyframes([
      { offset: 0, transform: 'scale(1)', color: 'black' },
      { offset: 0.5, transform: 'scale(1.5)', color: 'red' },
      { offset: 1, transform: 'scale(1)', color: 'white' }
    ]);

