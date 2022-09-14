import 'reflect-metadata';

// const plane = {
//     color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const colorNoteMeta = Reflect.getMetadata('note', plane, 'color');

// console.log(colorNoteMeta);
@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vrrrrrrrrrrr');
    }
}
function get(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    };
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);

        console.log(path);
    }
}
