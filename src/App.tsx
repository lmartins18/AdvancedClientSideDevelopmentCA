import { Home } from "./Random";
import { Layout } from "./components/Layout";
import { MealContextProvider } from "./contexts/recipe-context/MealContextProvider";
import { RecipesDialogContextProvider } from "./contexts/recipes-dialog-context";

import { ThemeContextProvider } from "./contexts/theme-context";

function App() {
  return (
    <ThemeContextProvider>
      <MealContextProvider>
        <RecipesDialogContextProvider>
          <Layout>
            <Home />
          </Layout>
        </RecipesDialogContextProvider>
      </MealContextProvider>
    </ThemeContextProvider >
  );
}

export default App;
