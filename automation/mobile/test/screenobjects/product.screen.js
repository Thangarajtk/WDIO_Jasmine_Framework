import AppScreen from './app.screen';

class ProductScreen extends AppScreen {

    constructor() {
        super('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView');
    }

   get titleProductScreen() {
       return $('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView');
   }

   async getTitleFromProductScreen() {
       
       return await this.titleProductScreen.getText();
   }
}

export default new ProductScreen();