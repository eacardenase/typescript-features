class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError('Oops, boat was sunk in the ocean.')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing at all');
        }
    }
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

// target will always be the prototype of the class
function testDecorator(target: any, key: string) {
    console.log(key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function () {
            try {
                method();
            } catch (error) {
                console.log(errorMessage);
            }
        };
    };
}
