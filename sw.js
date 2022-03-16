const cacheName = 'v1::ftc-builder';

const assets = [
	'./',

	'./manifest.json',
	'./images/icon.png',

	'./files/favicon.ico',

	'./js/libs/three.module.js',

	'./js/controls/TransformControls.js',

	'./js/libs/chevrotain.module.min.js',
	'./js/libs/fflate.module.js',

	'./js/libs/draco/draco_decoder.js',
	'./js/libs/draco/draco_decoder.wasm',
	'./js/libs/draco/draco_encoder.js',
	'./js/libs/draco/draco_wasm_wrapper.js',

	'./js/libs/draco/gltf/draco_decoder.js',
	'./js/libs/draco/gltf/draco_decoder.wasm',
	'./js/libs/draco/gltf/draco_wasm_wrapper.js',

	'./js/libs/motion-controllers.module.js',

	'./js/libs/rhino3dm/rhino3dm.wasm',
	'./js/libs/rhino3dm/rhino3dm.js',

	'./js/loaders/3DMLoader.js',
	'./js/loaders/3MFLoader.js',
	'./js/loaders/AMFLoader.js',
	'./js/loaders/ColladaLoader.js',
	'./js/loaders/DRACOLoader.js',
	'./js/loaders/FBXLoader.js',
	'./js/loaders/GLTFLoader.js',
	'./js/loaders/KMZLoader.js',
	'./js/loaders/IFCLoader.js',
	'./js/loaders/ifc/web-ifc-api.js',
	'./js/loaders/ifc/web-ifc.wasm',
	'./js/loaders/MD2Loader.js',
	'./js/loaders/OBJLoader.js',
	'./js/loaders/MTLLoader.js',
	'./js/loaders/PLYLoader.js',
	'./js/loaders/RGBELoader.js',
	'./js/loaders/STLLoader.js',
	'./js/loaders/SVGLoader.js',
	'./js/loaders/TGALoader.js',
	'./js/loaders/TDSLoader.js',
	'./js/loaders/VOXLoader.js',
	'./js/loaders/VRMLLoader.js',
	'./js/loaders/VTKLoader.js',
	'./js/loaders/XYZLoader.js',

	'./js/curves/NURBSCurve.js',
	'./js/curves/NURBSUtils.js',

	'./js/interactive/HTMLMesh.js',
	'./js/interactive/InteractiveGroup.js',

	'./js/environments/RoomEnvironment.js',

	'./js/exporters/ColladaExporter.js',
	'./js/exporters/DRACOExporter.js',
	'./js/exporters/GLTFExporter.js',
	'./js/exporters/OBJExporter.js',
	'./js/exporters/PLYExporter.js',
	'./js/exporters/STLExporter.js',
	'./js/exporters/USDZExporter.js',

	'./js/helpers/VertexNormalsHelper.js',

	'./js/geometries/TeapotGeometry.js',

	'./js/webxr/VRButton.js',
	'./js/webxr/XRControllerModelFactory.js',

	'./images/rotate.svg',
	'./images/scale.svg',
	'./images/translate.svg',

	'./js/libs/codemirror/codemirror.css',
	'./js/libs/codemirror/theme/monokai.css',

	'./js/libs/codemirror/codemirror.js',
	'./js/libs/codemirror/mode/javascript.js',
	'./js/libs/codemirror/mode/glsl.js',

	'./js/libs/esprima.js',
	'./js/libs/jsonlint.js',

	'./js/libs/codemirror/addon/dialog.css',
	'./js/libs/codemirror/addon/show-hint.css',
	'./js/libs/codemirror/addon/tern.css',

	'./js/libs/codemirror/addon/dialog.js',
	'./js/libs/codemirror/addon/show-hint.js',
	'./js/libs/codemirror/addon/tern.js',
	'./js/libs/acorn/acorn.js',
	'./js/libs/acorn/acorn_loose.js',
	'./js/libs/acorn/walk.js',
	'./js/libs/ternjs/polyfill.js',
	'./js/libs/ternjs/signal.js',
	'./js/libs/ternjs/tern.js',
	'./js/libs/ternjs/def.js',
	'./js/libs/ternjs/comment.js',
	'./js/libs/ternjs/infer.js',
	'./js/libs/ternjs/doc_comment.js',
	'./js/libs/tern-threejs/threejs.js',

	'./js/libs/signals.min.js',
	'./js/libs/ui.js',
	'./js/libs/ui.three.js',

	'./js/libs/app.js',
	'./js/Player.js',
	'./js/Script.js',

	//

	'./css/main.css',

	'./js/EditorControls.js',
	'./js/Storage.js',

	'./js/Editor.js',
	'./js/Config.js',
	'./js/History.js',
	'./js/Loader.js',
	'./js/LoaderUtils.js',
	'./js/Menubar.js',
	'./js/Menubar.File.js',
	'./js/Menubar.Edit.js',
	'./js/Menubar.Add.js',
	'./js/Menubar.Play.js',
	'./js/Menubar.Examples.js',
	'./js/Menubar.Help.js',
	'./js/Menubar.View.js',
	'./js/Menubar.Status.js',
	'./js/Resizer.js',
	'./js/Sidebar.js',
	'./js/Sidebar.Scene.js',
	'./js/Sidebar.Project.js',
	'./js/Sidebar.Project.Materials.js',
	'./js/Sidebar.Project.Renderer.js',
	'./js/Sidebar.Project.Video.js',
	'./js/Sidebar.Settings.js',
	'./js/Sidebar.Settings.History.js',
	'./js/Sidebar.Settings.Shortcuts.js',
	'./js/Sidebar.Settings.Viewport.js',
	'./js/Sidebar.Properties.js',
  './js/Sidebar.About.js',
	'./js/Sidebar.Object.js',
	'./js/Sidebar.Geometry.js',
	'./js/Sidebar.Geometry.BufferGeometry.js',
	'./js/Sidebar.Geometry.Modifiers.js',
	'./js/Sidebar.Geometry.BoxGeometry.js',
	'./js/Sidebar.Geometry.CircleGeometry.js',
	'./js/Sidebar.Geometry.CylinderGeometry.js',
	'./js/Sidebar.Geometry.DodecahedronGeometry.js',
	'./js/Sidebar.Geometry.ExtrudeGeometry.js',
	'./js/Sidebar.Geometry.IcosahedronGeometry.js',
	'./js/Sidebar.Geometry.LatheGeometry.js',
	'./js/Sidebar.Geometry.OctahedronGeometry.js',
	'./js/Sidebar.Geometry.PlaneGeometry.js',
	'./js/Sidebar.Geometry.RingGeometry.js',
	'./js/Sidebar.Geometry.SphereGeometry.js',
	'./js/Sidebar.Geometry.ShapeGeometry.js',
	'./js/Sidebar.Geometry.TetrahedronGeometry.js',
	'./js/Sidebar.Geometry.TorusGeometry.js',
	'./js/Sidebar.Geometry.TorusKnotGeometry.js',
	'./js/Sidebar.Geometry.TubeGeometry.js',
	'./js/Sidebar.Geometry.TeapotGeometry.js',
	'./js/Sidebar.Material.js',
	'./js/Sidebar.Material.BooleanProperty.js',
	'./js/Sidebar.Material.ColorProperty.js',
	'./js/Sidebar.Material.ConstantProperty.js',
	'./js/Sidebar.Material.MapProperty.js',
	'./js/Sidebar.Material.NumberProperty.js',
	'./js/Sidebar.Material.Program.js',
	'./js/Sidebar.Animation.js',
	'./js/Sidebar.Script.js',
	'./js/Strings.js',
	'./js/Toolbar.js',
	'./js/Viewport.js',
	'./js/Viewport.Camera.js',
	'./js/Viewport.Info.js',
	'./js/Viewport.ViewHelper.js',
	'./js/Viewport.VR.js',

	'./js/Command.js',
	'./js/commands/AddObjectCommand.js',
	'./js/commands/RemoveObjectCommand.js',
	'./js/commands/MoveObjectCommand.js',
	'./js/commands/SetPositionCommand.js',
	'./js/commands/SetRotationCommand.js',
	'./js/commands/SetScaleCommand.js',
	'./js/commands/SetValueCommand.js',
	'./js/commands/SetUuidCommand.js',
	'./js/commands/SetColorCommand.js',
	'./js/commands/SetGeometryCommand.js',
	'./js/commands/SetGeometryValueCommand.js',
	'./js/commands/MultiCmdsCommand.js',
	'./js/commands/AddScriptCommand.js',
	'./js/commands/RemoveScriptCommand.js',
	'./js/commands/SetScriptValueCommand.js',
	'./js/commands/SetMaterialCommand.js',
	'./js/commands/SetMaterialColorCommand.js',
	'./js/commands/SetMaterialMapCommand.js',
	'./js/commands/SetMaterialValueCommand.js',
	'./js/commands/SetMaterialVectorCommand.js',
	'./js/commands/SetSceneCommand.js',
	'./js/commands/Commands.js',

	//

	'./examples/arkanoid.app.json',
	'./examples/camera.app.json',
	'./examples/particles.app.json',
	'./examples/pong.app.json',
	'./examples/shaders.app.json'

];

self.addEventListener( 'install', async function () {

	const cache = await caches.open( cacheName );

	assets.forEach( function ( asset ) {

		cache.add( asset ).catch( function () {

			console.warn( '[SW] Cound\'t cache:', asset );

		} );

	} );

} );

self.addEventListener( 'fetch', async function ( event ) {

	const request = event.request;
	event.respondWith( networkFirst( request ) );

} );

async function networkFirst( request ) {

	return fetch( request )
		.then( async function ( response ) {

			const cache = await caches.open( cacheName );

			cache.put( request, response.clone() );

			return response;

		} )
		.catch( async function () {

			const cachedResponse = await caches.match( request );

			if ( cachedResponse === undefined ) {

				console.warn( '[SW] Not cached:', request.url );

			}

			return cachedResponse;

		} );

}
