import { NumberFormatBase } from 'react-number-format';

const persianNumeral = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

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

export function PersianNumericFormat({
  value,
  onChange,
  placeholder = '',
  className,
  prefix = '',
  styles,
  postfix = '',
}: PersianNumericFormatProps) {
  const _format = (val: string) => {
    let formattedValue = val.replace(/,/g, '');
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedValue;
  };

  const _removeFormatting = (val: string) => {
    val = val.replace(prefix, '').replace(postfix, '');
    return val.replace(new RegExp(persianNumeral.join('|'), 'g'), ($1) =>
      persianNumeral.indexOf($1).toString()
    );
  };

  const _isCharacterSame = () => {
    return false;
  };

  const handleChange = (e: any) => {
    const { value: inputValue } = e.target;
    onChange &&
      onChange({
        ...e,
        target: {
          ...e.target,
          value: _removeFormatting(
            inputValue.replace(postfix, '').replace(prefix, '')
          ),
        },
      });
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        background: 'transparent',
        ...styles,
      }}
      className="input-container"
    >
      {prefix && (
        <span
          style={{
            position: 'absolute',
            top: '50%',
            right: '1',
            marginRight: '1.5%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            backgroundColor: 'transparent',
          }}
        >
          {prefix}
        </span>
      )}
      <NumberFormatBase
        format={_format}
        removeFormatting={_removeFormatting}
        isCharacterSame={_isCharacterSame}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type="tel"
        className={className}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          direction: 'rtl',
          border: '1px solid gray',
          borderRadius: '5px',
          paddingRight: prefix.length !== 0 ? prefix.length * 8 : 5,
          paddingLeft: postfix.length !== 0 ? postfix.length * 8 : 5,
        }}
      />
      {postfix && (
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            marginLeft: '1%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            backgroundColor: 'transparent',
          }}
          className="postfix"
        >
          {postfix}
        </span>
      )}
    </div>
  );
}
