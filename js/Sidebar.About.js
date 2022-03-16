import { UIPanel, UIRow, UISelect, UISpan, UIText } from './libs/ui.js';


function SidebarAbout( editor ) {

  const strings = editor.strings;

  const container = new UISpan();

	const about = new UIPanel();
	about.setBorderTop( '0' );
	about.setPaddingTop( '20px' );
	container.add( about );

  // App Version
  const appVer = new UIRow();
  appVer.add(new UIText(
    strings.getKey('app/text/version')).setWidth('90px'));
  appVer.add(new UIText(
    strings.getKey('app/version')).setWidth('150px'));
  about.add(appVer);

  // App Team
  const appTeam = new UIRow();
  appTeam.add(new UIText(
    strings.getKey('app/text/author')).setWidth('90px'));
  appTeam.add(new UIText(
    strings.getKey('app/author')).setWidth('150px'));
  about.add(appTeam);

  // App Licence
  const appLicence = new UIRow();
  appLicence.add(new UIText(
    strings.getKey('app/text/licence')).setWidth('90px'));
  appLicence.add(new UIText(
    strings.getKey('app/licence')).setWidth('150px'));
  about.add(appLicence);

  // App Date
  const appDate = new UIRow();
  appDate.add(new UIText(
    strings.getKey('app/text/date')).setWidth('90px'));
  appDate.add(new UIText(
    strings.getKey('app/date')).setWidth('150px'));
  about.add(appDate);

  // ThreeJS Version
  const threeVer = new UIRow();
  threeVer.add(new UIText(
    strings.getKey('app/text/threejs/version')).setWidth('90px'));
  threeVer.add(new UIText(
    strings.getKey('app/threejs/version')).setWidth('150px'));
  about.add(threeVer);

  // ThreeJS Date
  const threeDate = new UIRow();
  threeDate.add(new UIText(
    strings.getKey('app/text/threejs/date')).setWidth('90px'));
  threeDate.add(new UIText(
    strings.getKey('app/threejs/date')).setWidth('150px'));
  about.add(threeDate);

  // ThreeJS Editor Version
  const threeEditorVer = new UIRow();
  threeEditorVer.add(new UIText(
    strings.getKey('app/text/threejs/editor/version')).setWidth('90px'));
  threeEditorVer.add(new UIText(
    strings.getKey('app/threejs/editor/version')).setWidth('150px'));
  about.add(threeEditorVer);

  // ThreeJS Editor Date
  const threeEditorDate = new UIRow();
  threeEditorDate.add(new UIText(
    strings.getKey('app/text/threejs/editor/date')).setWidth('90px'));
  threeEditorDate.add(new UIText(
    strings.getKey('app/threejs/editor/date')).setWidth('150px'));
  about.add(threeEditorDate);

  
	return container;
  
}

export { SidebarAbout };