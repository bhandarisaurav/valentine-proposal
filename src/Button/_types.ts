export interface ButtonProps {
    noCounter: number,
    setNoCounter: (value: number) => void
    handleYesClick?: (value: boolean) => void
}