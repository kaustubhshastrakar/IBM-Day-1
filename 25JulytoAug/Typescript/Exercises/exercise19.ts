interface StockItem {
  name: string;
  quantity: number;
}


class WarehouseLocation {
  private stockItem: StockItem | null;

  constructor() {
    this.stockItem = null;
  }

  
  getStockItem(): StockItem | null {
    return this.stockItem;
  }

  
  setStockItem(item: StockItem) {
    this.stockItem = item;
  }
}


const newStockItem: StockItem = {
  name: "Pencil",
  quantity: 100,
};


const newWarehouseLocation = new WarehouseLocation();


newWarehouseLocation.setStockItem(newStockItem);


const retrievedStockItem = newWarehouseLocation.getStockItem();

if (retrievedStockItem) {
  console.log("Retrieved Stock Item: ", retrievedStockItem);
} else {
  console.log("No stock item found at this location.");
}
