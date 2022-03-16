import { UITabbedPanel, UISpan } from './libs/ui.js';

import { SidebarScene } from './Sidebar.Scene.js';
import { SidebarProperties } from './Sidebar.Properties.js';
import { SidebarScript } from './Sidebar.Script.js';
import { SidebarAnimation } from './Sidebar.Animation.js';
import { SidebarProject } from './Sidebar.Project.js';
import { SidebarSettings } from './Sidebar.Settings.js';
import { SidebarAbout } from './Sidebar.About.js';

function Sidebar( editor ) {

	const strings = editor.strings;

	const container = new UITabbedPanel();
	container.setId( 'sidebar' );

	const scene = new UISpan().add(
		new SidebarScene( editor ),
		new SidebarProperties( editor ),
		new SidebarAnimation( editor ),
		new SidebarScript( editor )
	);
	const project = new SidebarProject( editor );
	const settings = new SidebarSettings( editor );
  const about = new SidebarAbout( editor );

	container.addTab( 'scene', strings.getKey( 'sidebar/scene' ), scene );
	container.addTab( 'project', strings.getKey( 'sidebar/project' ), project );
	container.addTab( 'settings', strings.getKey( 'sidebar/settings' ), settings );
  container.addTab( 'about', string.getKey( 'sidebar/about'), about)
	container.select( 'scene' );

	return container;

}

export { Sidebar };
