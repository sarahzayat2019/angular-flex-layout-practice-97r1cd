import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular 5";
  flexLayout1 =
    '<div class="container">' +
    '\n	<div class="content" fxLayout="row">' +
    '\n	\n<div fxFlex="50" fxFlex.lt-md="100" class="flex-item">' +
    '\n	<div class="item">50% division</div>' +
    "\n	</div>" +
    '\n	\n<div fxFlex="50" fxFlex.lt-md="100" class="flex-item">' +
    '\n		<div class="item">50% division</div>' +
    "\n		</div>" +
    "\n\n	</div>" +
    "\n	</div>";
  fxFlex1 =
    '<div class="container">' +
    '\n	<div class="content" fxLayout="row" fxFlexFill>' +
    '\n	\n	<div fxFlex="20" class="flex-item">' +
    '\n		<div class="item">20% division</div>' +
    "\n	</div>" +
    '\n	 \n<div fxFlex="20" class="flex-item">' +
    '\n		<div class="item">20% division</div>' +
    "\n	</div>" +
    '\n\n	<div fxFlex="20" class="flex-item">' +
    '\n	<div class="item">20% division</div>' +
    "\n	</div>" +
    '\n\n	<div fxFlex="20" class="flex-item">' +
    '\n		<div class="item">20% division</div>' +
    "\n	</div>" +
    '\n\n	<div fxFlex="20" class="flex-item">' +
    '\n		<div class="item">20% division</div>' +
    "\n	</div>" +
    "\n\n		</div>" +
    "\n</div>";

  flexLayoutAlign1 = '<div fxLayoutAlign="start stretch"></div>';
  flexLayoutAlign2 =
    '<div class="container-box">' +
    '\n<div class="content" fxLayout="row" fxLayoutAlign="center center" fxFlexFill>' +
    '\n\n<div fxFlex="20" class="flex-item">' +
    '\n<div class="item">1. One</div>' +
    "\n</div>" +
    '\n\n<div fxFlex="20" class="flex-item">' +
    '\n<div class="item">1. Two</div>' +
    "\n</div>" +
    '\n\n<div fxFlex="20" class="flex-item">' +
    '\n<div class="item">1. Three</div>' +
    "\n</div>" +
    "\n\n</div>" +
    "\n</div>";

  fxFlexAlign1 =
    '	<div class="container-box">' +
    '\n	<div class="content" fxLayout="row" fxFlexFill>' +
    '\n\n	<div fxFlex="20" class="flex-item" fxFlexAlign="center">' +
    '\n		<div class="item">1. One</div>' +
    "\n	</div>" +
    '\n	\n	<div fxFlex="20" class="flex-item" fxFlexAlign="start">' +
    '\n			<div class="item">1. Two</div>' +
    "\n		</div>" +
    '\n	\n	<div fxFlex="20" class="flex-item" fxFlexAlign="end">' +
    '\n			<div class="item">1. Three</div>' +
    "\n		</div>" +
    "\n	\n	</div>" +
    "\n	</div>";

  fxFlexOrder1 =
    '<div class="container">' +
    '\n	\n<div class="content" fxLayout="row wrap">' +
    '\n\n<div fxFlex="20" class="flex-item" fxFlexOrder="4">' +
    '\n<div class="item">1. One</div>' +
    "\n</div>" +
    '\n	\n<div fxFlex="20" class="flex-item" fxFlexOrder="2">' +
    '\n		<div class="item">2. Two</div>' +
    "\n	</div>" +
    '\n	\n<div fxFlex="20" class="flex-item" fxFlexOrder="3">' +
    '\n		<div class="item">3. Three</div>' +
    "\n			</div>" +
    '\n	\n	<div fxFlex="20" class="flex-item" fxFlexOrder="1">' +
    '\n			<div class="item">4. Four</div>' +
    "\n			</div>" +
    "\n		</div>" +
    "\n	</div>";

  fxFlexOffset1 =
    '<div class="container-box">' +
    '\n<div class="content" fxLayout="row wrap" fxFlexFill>' +
    '\n	\n	<div fxFlex="50" class="flex-item" fxFlexOffset="20">' +
    '\n	<div class="item">20% offset</div>' +
    "\n	</div>" +
    "\n	\n</div>" +
    "\n	</div>";
  fxFlexFill1 = '<div class="content" fxLayout="row" fxFlexFill>';

  fxShow1 = '<div fxShow [fxShow.xs]="isVisibleOnMobile()"></div>';
  fxHide1 = '<div fxHide [fxHide.gt-sm]="isVisibleOnDesktop()"></div>';
  ngClass1 = "<div [ngClass.sm]=\"{'fxClass-sm': hasStyle}\"></div>";
  ngStyle1 = "<div [ngStyle.xs]=\"{'font-size.px': 10, color: 'blue'}\"></div>";
}
