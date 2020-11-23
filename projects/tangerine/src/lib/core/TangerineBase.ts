export class TangerineBase {
  addAttributeClasses(nativeElement: HTMLElement, attributes: string[]): void {
    for (const attr of attributes) {
      if (this.hasHostAttributes(nativeElement, attr)) {
        nativeElement.classList.add(attr);
      }
    }
  }

  addAttributeBooleans(nativeElement: HTMLElement, attributes: string[]): void {
    for (const attr of attributes) {
      if (this.hasHostAttributes(nativeElement, attr)) {
        this[attr] = true;
      }
    }
  }

  hasHostAttributes(
    nativeElement: HTMLElement,
    ...attributes: string[]
  ): boolean {
    return attributes.some((attribute) =>
      nativeElement.hasAttribute(attribute)
    );
  }
}
