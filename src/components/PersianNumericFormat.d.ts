interface PersianNumericFormatProps {
    value?: string;
    onChange?: (e: any) => void;
    placeholder?: string;
    className?: string;
    prefix?: string;
    postfix?: string;
    formatter?: (value: string) => string;
    styles?: any;
}
export declare function PersianNumericFormat({ value, onChange, placeholder, className, prefix, styles, postfix, }: PersianNumericFormatProps): JSX.Element;
export {};
