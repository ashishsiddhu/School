import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'columns'
  }
})
export class HomeComponent  {
  activeTab = 'about';

  activeCall(activeTab){
     if(activeTab == "about"){
      this.activeTab = "about";
     }else if(activeTab == "result"){
      this.activeTab = "result";
     }else if(activeTab == "admission"){
      this.activeTab = "admission";
     }else if(activeTab == "result"){
      this.activeTab = "result";
     }else if(activeTab == "event"){
      this.activeTab = "event";
     }else if(activeTab == "ncc"){
      this.activeTab = "ncc";
     }else if(activeTab == "contact"){
      this.activeTab = "contact";
     }
   // this.activeTab = activeTab;
  }
  
  // result(activeTab){
  //   this.activeTab = activeTab;
  // }
  public albums: Array<IAlbum>;
  private _subscription: Subscription;
  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lighboxConfig: LightboxConfig
  ) {
    this.albums = [];
    for (let i = 1; i <= 8; i++) {
      const src = '../../assets/img/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../assets/img/image' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this.albums.push(album);
    }

    // set default config
    this._lighboxConfig.fadeDuration = 1;
  }

  open(index: number): void {
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

    // override the default config
    this._lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this._subscription.unsubscribe();
    }
  }
}
