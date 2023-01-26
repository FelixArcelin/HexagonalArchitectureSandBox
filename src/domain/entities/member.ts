export type Member = {
    name: string;
    birthday: string;
    age: number;
    roles: string[];
}

export type Lineup = {
    members: Member[];
}