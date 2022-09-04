const profile = {
    name: 'Edwin',
    age: 26,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(newAge: number): void {
        this.age = newAge;
    },
};

const { age }: { age: number } = profile;
const {
    coords: { lat, lng },
}: {
    coords: {
        lat: number;
        lng: number;
    };
} = profile;

export {};
