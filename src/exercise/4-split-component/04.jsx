import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

const Header = () => {
  return  (
    <header>
      <h1>Mes recettes de cuisine !</h1>
      <p>Par BeginReact.dev</p>
    </header>
  )
}

const Badge = ({children}) => (
  <p className={styles.badge}>{children}</p>
) //parenthèses OK car on ne return que du jsx --> sinon {expression en js ... return (/jsx/)}

const SHOPPING_DATA = [
  {id: 1, name: 'Carotte', quantity: 12, checked: false},
  {id: 2, name: 'Patate', quantity: 19, checked: false},
]

const ShoppingItem = ({name, quantity, checked}) => (
    <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
      <div className={styles.section}>
        <p>{name}</p>
        <Badge>{quantity}</Badge>
      </div>
      <div className={styles.section}>
        <input type="checkbox" value={checked} />
      </div>
    </div>
  )

const ShoppingList = () => (
    <div className={clsx(styles['flex-col'])}>
      <h2>Liste de course</h2>
        <div className={styles['shopping-list-items']}>
          {SHOPPING_DATA.map((item) => (
            <ShoppingItem key={item.id} {...item} />
          ))}
        </div>
    </div>
  )

const RECIPE_DATA = [
  {id: 1, name : 'Tarte à la carotte', date : '11.06.22'},
  {id: 1, name : 'Sauce aux haricots', date : '15.08.22'},
]

const Recipe = ({name, date}) => (
    <li className={clsx(styles['flex'], styles['gap-4'])}>
      <span>{name}</span>
      <Badge>{date}</Badge>
    </li>
  )

const Recipes = () => (
    <div className={clsx(styles['flex-col'])}>
        <h2>Liste de recettes à faire</h2>

        <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
          {RECIPE_DATA.map((item)=>(
            <Recipe key={item.id} {...item} />
          ))}
        </ul>
      </div>
  )

const Footer = () => (
  <footer>
    <p>Create by BeginReact.dev</p>
  </footer>
)

const App = () => {
  return (
    <div className={clsx(styles['container'])}>
      <Header />      
      <hr />
      <ShoppingList />
      <hr />
      <Recipes />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
