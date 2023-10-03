import clsx from 'clsx';
import styled from 'styled-components';

// const VariantsStyle = {
//   primary: 'bg-[#646cff]',
//   secondary: 'bg-green-600',
//   default: 'bg-neutral-900',
// };

// const SizesStyle = {
//   small: 'py-2 px-4 text-base',
//   large: 'py-3 px-6 text-lg',
// };

const Button = styled.button({
  // en utilisant une fonction tu va pouvoir définir des styles conditionnellement
  // ici avec un block
  backgroundColor: (props) => {
    if (props.variant === 'primary') return '#646cff';
    else if (props.variant === 'secondary') return '#16a34a';
    else return '#171717';
  },
  // color: 'white',
  // ici j'utilise un ternaire pour définir la largeur du bouton en fonction
  // de la props "size"
  padding: (props) => (props.size === 'small' ? '8px 16px' : '12px 24px'),
  fontSize: (props) => (props.size === 'small' ? '1rem' : '1.2rem'),
});

// const Button = ({ variant, size, children }) => {
// const variantStyle = VariantsStyle[variant];
// const sizeStyle = SizesStyle[size];
//   return (
//     <button
//       className={clsx(
//         'border-0 rounded',
//         {
//           'bg-[#646cff]': variant === 'primary',
//           'bg-green-600': variant === 'secondary',
//           'bg-neutral-900': variant === 'default',
//         },
//         {
//           'py-2 px-4 text-base': size === 'small',
//           'py-3 px-6 text-lg': size === 'large',
//         }
//       )}
//     >
//       {children}
//     </button>
//   );
// };

const Demo = () => {
  return (
    // 🦁 Ajouter des styles pour que les boutons soit alignés au centre avec
    // display: flex et flexDirection: column ainsi que alignItems: center
    <div className="items-center flex flex-col gap-4">
      <Button variant="primary" size="small">
        Primary small
      </Button>
      <Button variant="secondary" size="small">
        Secondary small
      </Button>
      <Button variant="default" size="small">
        Default small
      </Button>
      <Button variant="primary" size="large">
        Primary large
      </Button>
      <Button variant="secondary" size="large">
        Secondary large
      </Button>
      <Button variant="default" size="large">
        Default large
      </Button>
    </div>
  );
};

// ℹ️ Ne pas modifier le code ci-dessous
const App = () => {
  return (
    // ℹ️ Cette classe permet d'enlever les styles par défaut des boutons !
    <div className="remove-global-styles">
      <Demo />
    </div>
  );
};

export default App;
