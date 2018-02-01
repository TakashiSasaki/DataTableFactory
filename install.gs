global = this;

function onInstall(e){
  onOpen(e);
}
onInstall.title="Reinstall add-on";

function onOpen(e){
  AddonHelper.installSpreadsheet("TakashiSasaki", "47Cf", global);
}
