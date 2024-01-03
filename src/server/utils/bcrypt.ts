import bcrypt from "bcrypt";

export const hash = (plaintext: string) => {
    return bcrypt.hashSync(plaintext, 12);
};

export const compare = (plaintext: string, hashed: string) => {
    return bcrypt.compareSync(plaintext, hashed);
};
