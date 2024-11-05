import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[forClone]',
  standalone: true,
})
export class ForCloneDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set forCloneOf(items: any[]) {
    // Container should be empty before rendering
    this.viewContainer.clear();

    for (let i = 0; i < items.length; i++) {
      const context = {
        $implicit: items[i],
        $index: i,
      };
      this.viewContainer.createEmbeddedView(this.templateRef, context);
    }
  }
}
