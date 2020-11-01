export class SpinnerItem {
  private _desktopImagePath: string;
  private _mobileImagePath: string;
  private _imageAltText: string;
  private _titleText: string;
  private _articleText: string;

  constructor(
    desktopImagePath: string,
    mobileImagePath: string,
    imageAltText: string,
    titleText: string,
    articleText: string
  ) {
    this._desktopImagePath = desktopImagePath;
    this._mobileImagePath = mobileImagePath;
    this._imageAltText = imageAltText;
    this._titleText = titleText;
    this._articleText = articleText;
  }

  public get desktopImagePath(): string {
    return this._desktopImagePath;
  }
  public set desktopImagePath(value: string) {
    this._desktopImagePath = value;
  }

  public get mobileImagePath(): string {
    return this._mobileImagePath;
  }
  public set mobileImagePath(value: string) {
    this._mobileImagePath = value;
  }

  public get imageAltText(): string {
    return this._imageAltText;
  }
  public set imageAltText(value: string) {
    this._imageAltText = value;
  }

  public get titleText(): string {
    return this._titleText;
  }
  public set titleText(value: string) {
    this._titleText = value;
  }

  public get articleText(): string {
    return this._articleText;
  }
  public set articleText(value: string) {
    this._articleText = value;
  }
}
