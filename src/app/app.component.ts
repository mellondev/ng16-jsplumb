import { Component } from '@angular/core';
import { BrowserUIAngular, jsPlumbService } from '@jsplumbtoolkit/browser-ui-angular';
import { SimpleNodeComponent } from './simple-node/simple-node.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toolkit?:BrowserUIAngular;
  toolkitParams: any = {}
  
  view = {
    nodes:{
      default:{
        component: SimpleNodeComponent
      }
    }
  }
  
  renderParams = {
    layout:{
      type:"ForceDirected"
    }
  }
  constructor(private $jsplumb:jsPlumbService) {
    this.toolkit = this.$jsplumb.getToolkit('toolkitId', this.toolkitParams);

    this.$jsplumb.getSurface('surfaceId', (s) => {
      s.load({
        nodes:[ {id:"1", name:"one"}, {id:"2", name:"two"}],
        edges:[ {source:"1", target:"2" } ]
      });
    })
        // This does not work either (copied from your docs)
    // this.toolkit.load({
    //   nodes:[ {id:"1", name:"one"}, {id:"2", name:"two"}],
    //   edges:[ {source:"1", target:"2" } ]
    // })
  }
}
