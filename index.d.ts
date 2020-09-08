declare module "mml-to-svg" {

    interface options {
        width?: number,
        ex?: number,
        em?: number
    }

    export default function MMLToSVG(str: string, opts?: options): string;
}