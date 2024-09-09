import { Component } from '@angular/core';

@Component({
    selector: 'tabs-style-doc',
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-tabs</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-tabs-nav</td>
                        <td>Container of headers.</td>
                    </tr>
                    <tr>
                        <td>p-tabs-selected</td>
                        <td>Selected tab header.</td>
                    </tr>
                    <tr>
                        <td>p-tabs-panels</td>
                        <td>Container panels.</td>
                    </tr>
                    <tr>
                        <td>p-tabs-panel</td>
                        <td>Content of a tab.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
})
export class StyleDoc {}