var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
// let originalCost: Cost = 425;
var originalcost;
if (typeof originalcost === "number") {
    var cost = originalcost;
}
else {
    var x = originalcost;
}
// originalCost = "A LOT of money!";
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture ";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveIventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveIventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: InventoryItemType.Computer,
    trackingNumber: "MBP123456",
    createDate: new Date(),
});
