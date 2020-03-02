import React from "react";
import "./politics.m.css";
import { ResponsiveImage } from "@quintype/components";


export function PoliticsPage(props) {
  return (
    <div>
       <div styleName="root">
        <div styleName="gridContainer">
           <div styleName="grid1 " className="qt-image-16x9">
              <ResponsiveImage
                slug={props.props["hero-image-s3-key"]}
                metadata={props.props["hero-image-metadata"]}
                aspectRatio={[16, 9]}
                defaultWidth={480}
                widths={[250, 480, 640]}
                sizes="( max-width: 500px ) 98vw, ( max-width: 768px ) 48vw, 23vw"
                imgParams={{ auto: ["format", "compress"] }}
              />
             <div styleName="ImgText" >
              <div styleName="headlineText">
                {props.props["hero-image-caption"]}
                </div>
                <p styleName="authorText">{props.props["hero-image-attribution"]}</p>
              </div>
           </div>
               <div styleName="grid20">
                 <div className="qt-image-16x9">
                  <ResponsiveImage
                    slug={props.props.cards[0].metadata["social-share"].image.key}
                    metadata={props.props.cards[0].metadata["social-share"].image.metadata}
                    aspectRatio={[16, 9]}
                    defaultWidth={480}
                    widths={[250, 480, 640]}
                    sizes="( max-width: 500px ) 98vw, ( max-width: 768px ) 48vw, 23vw"
                    imgParams={{ auto: ["format", "compress"] }}
                  />
                  </div>
                 
                  <div styleName="headline">
                    {props.props.cards[0]["story-elements"][0].title}
                  </div>
                 
                 <p styleName="author">{props.props.cards[0]["story-elements"][0]["image-attribution"]}</p>
                </div>
               <div styleName="grid21">
                 <div styleName="headline">
                   {props.props.cards[1]["story-elements"][0].title} 
                 </div>
                  <p styleName="author">
                    {props.props.cards[1]["story-elements"][0]["image-attribution"]} 
                  </p>
               </div> 
                <div styleName="grid31">
                  <div styleName="headline1">
                  {props.props.cards[2]["story-elements"][0].title} 
                  </div>
                  <p styleName="author1">
                  {props.props.cards[2]["story-elements"][0]["image-attribution"]} 
                  </p>
                </div>
                <div styleName="grid32">
                  <div styleName="headline1">
                    {props.props.cards[3]["story-elements"][0].title} 
                  </div>
                  <p styleName="author1">
                    {props.props.cards[3]["story-elements"][0]["image-attribution"]}
                  </p>
                </div>
                <div styleName="grid33">
                  <div styleName="headline1">
                  {props.props.cards[4]["story-elements"][0].title} 
                  </div>
                  <p styleName="author1">
                    {props.props.cards[4]["story-elements"][0]["image-attribution"]}
                  </p>
                </div>
                <div styleName="grid34">
                  <div styleName="headline1">
                    {props.props.cards[5]["story-elements"][0].title}
                  </div>
                  <p styleName="author1">
                    {props.props.cards[5]["story-elements"][0]["image-attribution"]}
                  </p>
                </div>
        </div>
      </div>

      
    </div>
  );
}

