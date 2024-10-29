"use client"; // Menandakan bahwa komponen ini berjalan di sisi klien

import { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import '../globals.css'; // Sesuaikan path jika perlu
import dynamic from 'next/dynamic';
import pluginCountdown from 'grapesjs-component-countdown';
import plugintyped from 'grapesjs-typed';

const DynamicDatePicker = dynamic(() => import('flowbite-datepicker'), {
  ssr: false,
});



const GrapesJSEditor = () => {

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: false,
      height: '600px',
      width: 'auto',
      plugins: [pluginCountdown,plugintyped],
      pluginsOpts: {
        [pluginCountdown]: { /* options */ },
        [plugintyped]: { /* options */ }
      },
      canvas: {
        styles: [
          '../globals.css',
          'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css',
        ],
        scripts: [
          'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js',
        ],
      },
      storageManager: false,
      blockManager: {
        blocks: [
          {
            id: 'flowbite-product-categories',
            label: '<b>Product Categories</b>',
            content: `            
              <div class="flex flex-wrap justify-between p-6 bg-gray-50">
                <div class="flex items-center justify-center w-full sm:w-1/2 md:w-1/4 p-4">
                  <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                    <img class="w-full h-48 object-cover" src="https://flowbite.com/docs/images/products/product1.jpg" alt="Product 1" />
                    <div class="p-4">
                      <h2 class="font-bold text-lg text-gray-800">Category 1</h2>
                      <p class="text-gray-600">Description for Category 1.</p>
                      <a href="#" class="mt-2 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors">View More</a>
                    </div>
                  </div>
                </div>
              </div>
            `,
            category: 'Blocks',
          },
          {
            id: 'flowbite-table-header',
            label: '<b>Table Header</b>',
            content: `
              <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm bg-white border border-gray-300 shadow-md">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-4 py-2 font-medium text-gray-900 border-b">Header 1</th>
                      <th scope="col" class="px-4 py-2 font-medium text-gray-900 border-b">Header 2</th>
                      <th scope="col" class="px-4 py-2 font-medium text-gray-900 border-b">Header 3</th>
                      <th scope="col" class="px-4 py-2 font-medium text-gray-900 border-b">Header 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b hover:bg-gray-100 transition-colors">
                      <td class="px-4 py-2 border-b">Row 1, Cell 1</td>
                      <td class="px-4 py-2 border-b">Row 1, Cell 2</td>
                      <td class="px-4 py-2 border-b">Row 1, Cell 3</td>
                      <td class="px-4 py-2 border-b">Row 1, Cell 4</td>
                    </tr>
                    <tr class="border-b hover:bg-gray-100 transition-colors">
                      <td class="px-4 py-2 border-b">Row 2, Cell 1</td>
                      <td class="px-4 py-2 border-b">Row 2, Cell 2</td>
                      <td class="px-4 py-2 border-b">Row 2, Cell 3</td>
                      <td class="px-4 py-2 border-b">Row 2, Cell 4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `,
            category: 'Blocks',
          },
          {
            id: 'flowbite-cta',
            label: '<b>Call to Action</b>',
            content: `
              <div class="bg-blue-600 p-6 rounded-lg text-center text-white shadow-md transition-transform transform hover:scale-105">
                <h2 class="text-2xl font-bold mb-2">Ready to Get Started?</h2>
                <p class="mb-4">Join our community and take the first step towards your goals!</p>
                <a href="https://www.instagram.com/01_ryno/" class="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-300">
                  Get Started
                </a>
              </div>
            `,
            category: 'Blocks',
          },
          {
            id: 'empty-column',
            label: '1 Column',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <path d="M3,3V21H21V3H3M19,19H5V5H19V19Z" />
                </svg>
              </div>
            `,
            content: `
              <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                <!-- Drop content here -->
              </div>
            `,
            category: 'Basic',
          },
          {
            id: 'two-column',
            label: '2 Columns',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="8" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                  <rect x="13" y="4" width="8" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                </svg>
              </div>
            `,
            content: `
              <div style="display: flex; justify-content: space-between; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px; gap: 10px;">
                <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 1 - Drop content here -->
                </div>
                <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 2 - Drop content here -->
                </div>
              </div>`,
            category: 'Basic',
          },
          {
            id: 'three-column',
            label: '3 Columns',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                  <rect x="9" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                  <rect x="15" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                </svg>
              </div>
            `,
            content: `
              <div style="display: flex; justify-content: space-between; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px; gap: 10px;">
                <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 1 - Drop content here -->
                </div>
                <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 2 - Drop content here -->
                </div>
                <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 3 - Drop content here -->
                </div>
              </div>`,
            category: 'Basic',
          },
          {
            id: 'row-with-two-column-3-7',
            label: '2 Columns 3/7',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                  <rect x="11" y="4" width="10" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                </svg>
              </div>
            `,
            content: `
              <div class="row" style="display: flex; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                <div class="column" style="flex: 3; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 1 (3/10) - Drop content here -->
                </div>
                <div class="column" style="flex: 7; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 2 (7/10) - Drop content here -->
                </div>
              </div>
            `,
            category: 'Basic',
          },
          {
            id: 'section',
            label: 'Text Section',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="2" fill="white" />
                  <rect x="2" y="10" width="20" height="2" fill="white" />
                  <rect x="2" y="16" width="10" height="2" fill="white" />
                </svg>
              </div>
            `,
            content: `
              <section style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ccc;">
                <h1 style="font-weight: bold; font-size: 24px;">Insert title here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </section>
            `,
            category: 'Basic',
          },
          {
            id: 'text',
            label: 'Text',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px; height:32px" viewBox="0 0 24 24">
                  <text x="12" y="18" font-family="Prociono, serif" font-size="30" fill="white" font-weight="bold" text-anchor="middle" alignment-baseline="middle">T</text>
                </svg>
              </div>
            `,
            content: '<div data-gjs-type="text">Insert your text here</div>',
            category: 'Basic',
          },
          {
            id: 'text-area',
            label: 'Textarea',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px; height:32px" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" fill="none" stroke="white" stroke-width="2" />
                  <line x1="4" y1="8" x2="20" y2="8" stroke="white" stroke-width="2" />
                  <line x1="4" y1="12" x2="15" y2="12" stroke="white" stroke-width="2" />
                  <line x1="4" y1="16" x2="10" y2="16" stroke="white" stroke-width="2" />
                </svg>
              </div>
            `,
            content: `
              <textarea style="width: 300px; height: 100px; border: 1px solid #ccc; padding: 10px; resize: both;" placeholder="Insert your text here"></textarea>
            `,
            category: 'Forms',
          },
          {
            id: 'image',
            label: 'Image',
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                </svg>
              </div>
            `,
            // Use `image` component
            content: { type: 'image' },
            // The component `image` is activatable (shows the Asset Manager).
            // We want to activate it once dropped in the canvas.
            category: 'Basic',
            activate: true,
            // select: true, // Default with `activate: true`
          },
          {
            id: "basic-video",
            label: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
                  <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path>
                </svg>
                <span style="text-align: center;">Video</span>
              </div>
            `,
            content: `
              <div class="video-container">
                <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            `,
            category: "Basic",
          },
          {
            id: "form-input",
            label: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
                  <path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path>
                  <path d="M4 10h1v4H4z"></path>
                </svg>
                <span style="text-align: center;">Input</span>
              </div>
            `,
            content: '<input type="text" placeholder="Enter text" class="border rounded-md p-2" />',
            category: "Forms",
          },
          {
            id: "form-button",
            label: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
                  <path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path>
                  <path d="M4 11.5h16v1H4z"></path>
                </svg>
                <span style="text-align: center;">Button</span>
              </div>
            `,
            content: '<button class="bg-blue-500 text-white px-4 py-2">Submit</button>',
            category: "Forms",
          },
        ],
      },
    });

    // Menambahkan komponen khusus untuk dropdown select
    editor.Components.addType("dynamic-select", {
      model: {
        defaults: {
          tagName: "select",
          attributes: { class: "dynamic-select" },
          traits: [
            {
              type: "textarea",
              label: "Options",
              name: "options",
              changeProp: 1,
              placeholder: "Masukkan opsi, pisahkan dengan '::' (contoh: opt1::opt2::opt3)",
            },
            {
              type: "checkbox",
              label: "Required",
              name: "required",
              changeProp: 1,
            },
          ],
          // Konten default
          content: `
        <option value="">Pilih...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      `,
          style: {
            padding: "5px",
            "border-radius": "4px",
            "border-color": "#ccc",
          },
        },

        // Inisialisasi event listener untuk memperbarui opsi dropdown dan atribut required
        init() {
          this.listenTo(this, "change:options", this.updateOptions);
          this.listenTo(this, "change:required", this.updateRequired);
        },

        // Method untuk memperbarui konten opsi dropdown
        updateOptions() {
          const optionsString = this.get("options") || "";
          const optionsArray = optionsString
            .split("::") // Pisahkan setiap opsi menggunakan '::'
            .map((option) => option.trim()) // Hapus spasi di sekitar setiap opsi
            .filter((option) => option); // Hapus entri kosong

          // Buat HTML untuk setiap option
          const optionsHTML = optionsArray
            .map((option, index) => `<option value="option${index + 1}">${option}</option>`)
            .join("");

          // Set ulang konten dropdown dengan opsi yang diperbarui
          this.components(`<option value="">Pilih...</option>${optionsHTML}`);
        },

        // Method untuk mengatur atribut required berdasarkan pilihan pengguna
        updateRequired() {
          const isRequired = this.get("required");
          if (isRequired) {
            this.addAttributes({ required: true });
          } else {
            this.removeAttributes("required");
          }
        },
      },
    });

    // Menambahkan blok untuk Dynamic Select
    editor.BlockManager.add("dynamic-select", {
      label: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
                  <path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path>
                  /path><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"></path>
                </svg>
                <span style="text-align: center;">Select</span>
              </div>
            `,
      content: { type: "dynamic-select" },
      category: "Forms",
    });

    // Tambahkan blok radio ke editor
    editor.BlockManager.add('radio-block', {
      label: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
                  <path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
                </svg>
                <span style="text-align: center;">Radio</span>
              </div>
            `,
      content: {
        type: 'custom-radio',
        name: 'myRadioGroup',
        checked: false,
        required: false,
      },
      category: 'Forms',
    });

    // Buat komponen radio button yang dapat diatur
    editor.Components.addType('custom-radio', {
      model: {
        defaults: {
          tagName: 'input',
          attributes: {
            type: 'radio',
          },
          name: 'myRadioGroup',
          checked: false,
          required: false,
          traits: [
            {
              type: 'text',
              name: 'name',
              label: 'Name',
            },
            {
              type: 'text',
              name: 'value',
              label: 'Value',
            },
            {
              type: 'checkbox',
              name: 'checked',
              label: 'Checked',
            },
            {
              type: 'checkbox',
              name: 'required',
              label: 'Required',
            },
          ],
        },
        init() {
          // Listener untuk update checked di kanvas ketika berubah di menu pengaturan
          this.on('change:checked', this.updateCheckedState);
        },
        updateCheckedState() {
          this.view.el.checked = this.get('checked');
        },
      },
      view: {
        events: {
          'change': 'onChange',
        },
        onRender() {
          const { name, checked, required, value } = this.model.attributes;

          // Set attributes pada elemen input
          this.el.setAttribute('type', 'radio');
          this.el.setAttribute('name', name || 'myRadioGroup');
          this.el.setAttribute('value', value || '');

          // Set checked dan required
          this.el.checked = checked;
          if (required) {
            this.el.setAttribute('required', 'required');
          } else {
            this.el.removeAttribute('required');
          }
        },
        onChange() {
          // Update status checked pada model
          this.model.set('checked', this.el.checked);
        },
      },
    });

    // Tambahkan komponen khusus untuk Label
    editor.Components.addType("custom-label", {
      model: {
        defaults: {
          tagName: "label",
          attributes: { class: "custom-label" },
          traits: [
            {
              type: "text",
              label: "Label Text",
              name: "labelText",
              changeProp: 1,
            },
            {
              type: "text",
              label: "For",
              name: "forAttribute",
              changeProp: 1,
              placeholder: "ID elemen yang dituju",
            },
          ],
          content: "Label",
          style: {
            color: "#333",
            "font-size": "14px",
          },
        },

        init() {
          this.listenTo(this, "change:labelText", this.updateLabelText);
          this.listenTo(this, "change:forAttribute", this.updateForAttribute);
        },

        updateLabelText() {
          const labelText = this.get("labelText") || "Label";
          this.components(labelText);
        },

        updateForAttribute() {
          const forValue = this.get("forAttribute");
          if (forValue) {
            this.addAttributes({ for: forValue });
          } else {
            this.removeAttributes("for");
          }
        },
      },
    });

    // Menambahkan blok untuk Label
    editor.Blocks.add("custom-label", {
      label: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
                  <path d="M22 11.9c0-.6-.5-.9-1.3-.9H3.4c-.8 0-1.3.3-1.3.9V17c0 .5.5.9 1.3.9h17.4c.8 0 1.3-.4 1.3-.9V12zM21 17H3v-5h18v5z"></path>
                  <rect width="14" height="5" x="2" y="5" rx=".5"></rect>
                  <path d="M4 13h1v3H4z"></path>
                </svg>
                <span style="text-align: center;">Label</span>
              </div>
            `,
      content: { type: "custom-label" },
      category: "Forms",
    });

    editor.Blocks.add('quote-block', {
      id: 'quote-block',
      label: 'Quote',
      content: `
        <blockquote data-gjs-highlightable="true" data-gjs-type="text" class="quote" style="font-style: italic; padding: 10px; border-left: 5px solid #ccc;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
        </blockquote>
      `,
      category: 'Basic',
      attributes: { class: 'fa fa-quote-left' }, // Optional icon in blocks panel
    });

    // Define the quote component type
    editor.Components.addType('text', {
      model: {
        defaults: {
          tagName: 'blockquote',
          classes: ['quote'],
          traits: [
            {
              type: 'text',
              label: 'Quote Text',
              name: 'content', // Trait to edit the quote text
              changeProp: 1, // Trigger change event
            },
          ],
        },
      },
      view: {
        onRender() {
          const model = this.model;

          // Update the inner text when the trait changes
          model.on('change:content', () => {
            this.el.innerText = model.get('content');
          });
        },
      },
    });


    editor.Blocks.add('map-block', {
      id: 'map-block',
      label: `
         <div style="display: flex; flex-direction: column; align-items: center;">
      <svg viewBox="0 0 24 24" style="width: 45px; margin-bottom: 10px;">
        <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"></path>
      </svg>
      <span>Maps</span>
    </div>
      `,
      content: `
        <div data-gjs-type="map" class="map-container" style="width: 100%; height: 400px; position: relative;">
          <iframe src="https://maps.google.com/maps?&amp;z=10&amp;t=q&amp;output=embed" frameborder="0" class="gjs-no-pointer" style="height: 100%; width: 100%;"></iframe>
        </div>
      `,
      category: 'Basic',
    });

    // Define the map component type
    editor.Components.addType('map', {
      model: {
        defaults: {
          tagName: 'div',
          classes: ['map'],
          traits: [
            {
              type: 'text',
              label: 'Address',
              name: 'address',
              changeProp: 1,
            },
            {
              type: 'select',
              label: 'Map Type',
              name: 'map_type',
              options: [
                { value: 'q', name: 'Roadmap' },
                { value: 'sat', name: 'Satellite' },
              ],
              changeProp: 1,
            },
            {
              type: 'range',
              label: 'Zoom',
              name: 'zoom',
              min: 1,
              max: 21,
              step: 1,
              changeProp: 1,
            },
          ],
          resizable: {
            // Enable resizing
            minWidth: 300,
            minHeight: 200,
          },
        },
        updateMap() {
          const address = this.get('address');
          const mapType = this.get('map_type');
          const zoom = this.get('zoom');
          const iframe = this.getEl().querySelector('iframe');

          // Update the src attribute of the iframe based on settings
          iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=${mapType}&z=${zoom}&output=embed`;
        },
      },
      view: {
        onRender() {
          const model = this.model;

          // Listen for changes in traits
          model.on('change:address change:map_type change:zoom', () => {
            model.updateMap();
          });
        },
      },
    });

    editor.Blocks.add('link-block', {
      id: 'link-block',
      label: 'Links',
      content: `
        <a href="https://example.com" data-gjs-type="link" style="display: inline-block; color: blue; text-decoration: none;">
          Link
        </a>
      `,
      category: 'Basic',
      attributes: { class: 'fa fa-link' }, // Optional icon in blocks panel
    });

    editor.Components.addType('link', {
      model: {
        defaults: {
          tagName: 'a',
          attributes: {
            href: 'https://example.com',
            target: '_blank',
          },
          traits: [
            {
              type: 'text',
              label: 'Link URL',
              name: 'href',
              changeProp: 1,
            },
            {
              type: 'select',
              label: 'Target',
              name: 'target',
              options: [
                { value: '_self', name: 'Same Tab' },
                { value: '_blank', name: 'New Tab' },
              ],
              changeProp: 1,
            },
          ],
        },
      },
      view: {
        onRender() {
          const linkElement = this.el;
          linkElement.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent link navigation in the editor
          });
        },
      },
    });

    editor.Blocks.add('custom-link-block', {
      id: 'custom-link-block',
      label: 'Link Block',
      content: `
        <a href="https://example.com" data-gjs-type="link" style="display: block; width: 50px; height: 50px; background-color: white; border: 1px solid #ccc; box-sizing: border-box;">
          <!-- No text here -->
        </a>
      `,
      category: 'Basic',
      attributes: { class: 'fa fa-link' }, // Optional icon in blocks panel
    });

    // Define the link component type
    editor.Components.addType('link', {
      model: {
        defaults: {
          tagName: 'a',
          attributes: {
            href: 'https://example.com', // Default link URL
            target: '_blank', // Default target
          },
          traits: [
            {
              type: 'text',
              label: 'Link URL',
              name: 'href', // Trait to edit the link URL
              changeProp: 1, // Trigger change event
            },
            {
              type: 'select',
              label: 'Target',
              name: 'target', // Trait to edit the link target
              options: [
                { value: '_self', name: 'Same Tab' }, // Open in the same tab
                { value: '_blank', name: 'New Tab' }, // Open in a new tab
              ],
              changeProp: 1, // Trigger change event
            },
          ],
        },
      },
      view: {
        onRender() {
          const linkElement = this.el; // Get the link element
          linkElement.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent link navigation in the editor
          });
        },
      },
    });

    const toggleTabScript = function () {
      const tabs = this.querySelectorAll("[data-tabs-target]"); // Mengakses semua tombol tab
      const tabContents = this.querySelectorAll("[role='tabpanel']"); // Mengakses semua konten tab

      tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          const targetId = this.getAttribute("data-tabs-target"); // Dapatkan id target tab yang diklik

          // Sembunyikan semua konten tab
          tabContents.forEach((content) => {
            content.classList.add("hidden");
          });

          // Hapus class hidden dari konten tab yang dipilih
          const targetContent = document.querySelector(targetId);
          if (targetContent) {
            targetContent.classList.remove("hidden");
          }

          // Update active state pada tab
          tabs.forEach((t) => {
            t.classList.remove("border-purple-600", "text-purple-600");
          });
          this.classList.add("border-purple-600", "text-purple-600");
        });
      });

      // Menghilangkan teks placeholder saat pengguna mulai mengetik
      tabContents.forEach((content) => {
        const placeholderText = content.innerText.trim();

        content.addEventListener("focus", function () {
          if (this.innerText === placeholderText) {
            this.innerText = ""; // Kosongkan placeholder saat pengguna mulai mengetik
          }
        });

        content.addEventListener("blur", function () {
          if (this.innerText.trim() === "") {
            this.innerText = placeholderText; // Tampilkan kembali placeholder jika tidak ada teks yang diisi
          }
        });
      });
    };

    editor.Components.addType("tabs-with-toggle", {
      model: {
        defaults: {
          script: toggleTabScript,
          content: `
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg border-purple-600 text-purple-600" data-tabs-target="#styled-profile" type="button" role="tab">Tab1</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" data-tabs-target="#styled-dashboard" type="button" role="tab">Tab2</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" data-tabs-target="#styled-settings" type="button" role="tab">Tab3</button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" data-tabs-target="#styled-contacts" type="button" role="tab">Tab4</button>
                    </li>
                </ul>
            </div>
            <div id="default-styled-tab-content">
                <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab1 di sini...</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab2 di sini...</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab3 di sini...</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab4 di sini...</p>
                </div>
            </div>
          `,
        },
      },
    });

    editor.Blocks.add("tabs-toggle-block", {
      label: `
      <div style="display: flex; flex-direction: column; align-items: center;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 45px; height: auto; margin-bottom: 10px;">
        <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"></path>
        <rect x="3" y="5" width="4" height="2" rx=".5"></rect>
        <rect x="8" y="5" width="4" height="2" rx=".5"></rect>
        <rect x="13" y="5" width="4" height="2" rx=".5"></rect>
      </svg>
      <span style="text-align: center;">Tabs</span>
    </div>
    `,
      content: { type: "tabs-with-toggle" },
      category: "Extra",
    });


    // Menambahkan blok custom untuk kode yang tidak muncul di canvas
    editor.Blocks.add('custom-code-input', {
      label: `
    <div>
      <div>
        <svg viewBox="0 0 25 25" style="margin-left: 1px">
          <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>
        </svg>
      </div>
      <div>Custom Code</div>
    </div>
  `,
      content: `<div data-gjs-type="custom-code" class="custom-code-container" style="padding: 10px; border: 1px dashed #ccc; text-align: center; font-style: italic;">Input your custom code here...</div>`,
      category: 'Extra',
    });

    // Menambahkan blok custom untuk kode yang tidak muncul di canvas
    editor.Blocks.add('custom-code-input', {
      label: `
    <div>
      <div>
        <svg viewBox="0 0 25 25" style="margin-left: 1px">
          <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>
        </svg>
      </div>
      <div>Custom Code</div>
    </div>
  `,
      content: `<div data-gjs-type="custom-code" class="custom-code-container" style="padding: 10px; border: 1px dashed #ccc; text-align: center; font-style: italic;">Input your custom code here...</div>`,
      category: 'Extra',
    });

    // Menambahkan jenis komponen untuk custom code
    editor.DomComponents.addType('custom-code', {
      model: {
        defaults: {
          tagName: 'div',
          draggable: true,
          droppable: false, // Tidak bisa men-drop elemen lain di dalamnya
          content: 'Input your custom code here...', // Placeholder text di canvas
          attributes: {
            style: 'padding: 10px; border: 1px dashed #ccc; text-align: center; font-style: italic;'
          },
        },
      },
      view: {
        onRender() {
          // Menampilkan popup saat komponen di-drop
          const modal = document.createElement('div');
          modal.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #ffffff; padding: 20px; border: 1px solid #ccc; z-index: 1000; width: 600px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <div class="gjs-mdl-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="gjs-mdl-title" style="font-size: 18px; color: #333; font-weight: bold;">Insert your code</div>
            <div class="gjs-mdl-btn-close" data-close-modal="" style="cursor: pointer; font-size: 24px; color: #999;">⨯</div>
          </div>
          <div class="gjs-mdl-content" style="margin-top: 15px;">
            <div id="gjs-mdl-c">
              <div class="gjs-custom-code" style="position: relative;">
                <pre id="lineNumbers" style="position: absolute; top: 0; left: 0; padding: 10px 0; margin: 0; border: none; background-color: #f0f0f0; color: #333; width: 40px; height: 200px; overflow: hidden; font-size: 12px; font-family: monospace; border-right: 1px solid #ddd; line-height: 1.5;"></pre>
                <textarea id="codeInput" style="width: calc(100% - 50px); height: 200px; padding: 10px; padding-left: 50px; resize: none; border: 1px solid #ddd; border-radius: 4px; background-color: #f9f9f9; font-family: monospace; font-size: 12px; line-height: 1.5; overflow-x: auto; white-space: pre;"></textarea>
                <button type="button" class="gjs-btn-prim gjs-btn-import__custom-code" style="margin-top: 10px; padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Save</button>
              </div>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 999;"></div>
      `;

          // Menambahkan modal ke body
          document.body.appendChild(modal);

          // Menangani event klik tombol close
          const closeButton = modal.querySelector('.gjs-mdl-btn-close');
          closeButton.addEventListener('click', () => {
            modal.style.display = 'none'; // Sembunyikan modal alih-alih menghapusnya
          });

          // Menangani event klik tombol save
          const saveButton = modal.querySelector('.gjs-btn-import__custom-code');
          saveButton.addEventListener('click', () => {
            const codeInputValue = document.getElementById('codeInput').value;

            // Set konten elemen custom code dengan input pengguna
            this.model.set('content', codeInputValue);

            // Reset the components with new code value for proper update
            this.model.components().reset([
              {
                type: 'text',
                content: codeInputValue,
              }
            ]);

            // Render ulang komponen agar perubahan terlihat di canvas
            this.model.view.render();

            // Sembunyikan modal setelah menyimpan
            modal.style.display = 'none';
          });

          // Mendapatkan referensi ke textarea dan elemen line numbers
          const codeInput = modal.querySelector('#codeInput');
          const lineNumbers = modal.querySelector('#lineNumbers');

          // Fungsi untuk memperbarui nomor baris
          const updateLineNumbers = () => {
            const lines = codeInput.value.split('\n').length;
            let lineNumbersContent = '';
            for (let i = 1; i <= lines; i++) {
              lineNumbersContent += `${i}\n`;
            }
            lineNumbers.textContent = lineNumbersContent;
          };

          // Menangani event input pada textarea
          codeInput.addEventListener('input', updateLineNumbers);

          // Update nomor baris saat menggulir
          codeInput.addEventListener('scroll', () => {
            lineNumbers.scrollTop = codeInput.scrollTop;
          });

          // Inisialisasi nomor baris saat pertama kali
          updateLineNumbers();
        }
      }
    });




    // Define a new component type for Tooltip
    editor.Components.addType('tooltip', {
      model: {
        defaults: {
          tagName: 'div',
          content: `
        <div class="tooltip-container">
          <span class="tooltip-text" style="display: none; background-color: rgba(165, 42, 42, 0.7); color: white; padding: 5px; border-radius: 5px; transition: opacity 0.3s ease; opacity: 0;"></span>
          <button class="tooltip-button" style="width: 100%; height: 100%; background: transparent; border: none; cursor: pointer;"></button>
        </div>
      `,
          traits: [
            {
              type: 'text',
              label: 'Tooltip Text',
              name: 'tooltipText',
              changeProp: 1,
              default: 'Tooltip text goes here',
            },
            {
              type: 'select',
              label: 'Position',
              name: 'tooltipPosition',
              options: [
                { value: 'top', name: 'Top' },
                { value: 'bottom', name: 'Bottom' },
                { value: 'left', name: 'Left' },
                { value: 'right', name: 'Right' },
              ],
              changeProp: 1,
            },
            {
              type: 'select',
              label: 'Length',
              name: 'tooltipLength',
              options: [
                { value: 'one-line', name: 'One Line' },
                { value: 'small', name: 'Small' },
                { value: 'medium', name: 'Medium' },
                { value: 'large', name: 'Large' },
                { value: 'fit', name: 'Fit to Content' },
              ],
              changeProp: 1,
            },
            {
              type: 'checkbox',
              label: 'Visible',
              name: 'tooltipVisible',
              changeProp: 1,
              default: true,
            },
            {
              type: 'button',
              label: 'Style Tooltip',
              name: 'styleTooltip',
              command: 'style-tooltip',
            },
          ],
          style: {
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
          },
        },

        init() {
          // Add listeners to update the tooltip content
          this.listenTo(this, 'change:tooltipText', this.updateTooltip);
          this.listenTo(this, 'change:tooltipPosition', this.updateTooltip);
          this.listenTo(this, 'change:tooltipLength', this.updateTooltip);
          this.listenTo(this, 'change:tooltipVisible', this.toggleTooltip);

          // Call updateTooltip after the element is rendered
          setTimeout(() => this.updateTooltip(), 0);
        },

        updateTooltip() {
          const tooltipText = this.get('tooltipText') || 'Tooltip text goes here';
          const position = this.get('tooltipPosition') || 'top';
          const length = this.get('tooltipLength') || 'medium';
          const visible = this.get('tooltipVisible');

          const size = length === 'small' ? 40 :
            length === 'medium' ? 70 :
              length === 'large' ? 100 :
                length === 'one-line' ? 60 :
                  70;

          // Update the tooltip content with a white box and text
          this.set('content', `
        <div class="tooltip-container" style="background-color: white; border: 1px solid #ccc; width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center;">
          <span class="tooltip-text" style="display: ${visible ? 'block' : 'none'}; background-color: rgba(165, 42, 42, 0.7); color: white; padding: 5px; border-radius: 5px; transition: opacity 0.3s ease; opacity: ${visible ? 1 : 0};">${tooltipText}</span>
          <button class="tooltip-button" style="width: 100%; height: 100%; background: transparent; border: none; cursor: pointer;"></button>
        </div>
      `);

          // Adjust tooltip position
          setTimeout(() => {
            const tooltipButton = this.getEl().querySelector('.tooltip-button');
            const tooltipTextElement = this.getEl().querySelector('.tooltip-text');

            if (tooltipButton && tooltipTextElement) {
              tooltipButton.onmouseover = () => {
                tooltipTextElement.style.display = 'block';
                tooltipTextElement.style.opacity = 1;
                this.setTooltipPosition(tooltipButton, tooltipTextElement, position);
              };

              tooltipButton.onmouseout = () => {
                tooltipTextElement.style.opacity = 0;
                setTimeout(() => {
                  tooltipTextElement.style.display = 'none';
                }, 300);
              };
            }
          }, 0);
        },

        setTooltipPosition(button, tooltip, position) {
          const rect = button.getBoundingClientRect();
          tooltip.style.position = 'absolute';

          switch (position) {
            case 'top':
              tooltip.style.left = `${rect.left + window.scrollX + (button.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;
              tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
              break;
            case 'bottom':
              tooltip.style.left = `${rect.left + window.scrollX + (button.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;
              tooltip.style.top = `${rect.bottom + window.scrollY}px`;
              break;
            case 'left':
              tooltip.style.left = `${rect.left + window.scrollX - tooltip.offsetWidth}px`;
              tooltip.style.top = `${rect.top + window.scrollY + (button.offsetHeight / 2) - (tooltip.offsetHeight / 2)}px`;
              break;
            case 'right':
              tooltip.style.left = `${rect.right + window.scrollX}px`;
              tooltip.style.top = `${rect.top + window.scrollY + (button.offsetHeight / 2) - (tooltip.offsetHeight / 2)}px`;
              break;
          }
        },

        toggleTooltip() {
          this.updateTooltip();
        },
      },
    });

    // Menambahkan blok tooltip ke kategori 'Extra' dengan logo pesan berwarna putih dan garis-garis hitam yang lebih tinggi dengan jarak
    editor.Blocks.add('tooltip', {
      label: `
  <div>
    <div>
      <svg viewBox="0 0 30 30" style="margin-left: 5px; margin-top: 10px;">
        <path d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4l-4 4-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m0 2v12h4.83L12 19.17 15.17 16H20V4H4z"></path>
      </svg>
    </div>
    <div>Tooltip</div>
  </div>
`,

      content: {
        type: 'tooltip',
        content: 'Tooltip',
      },
      category: 'Extra',
    });

    // Inisialisasi dropdown setelah editor memuat konten
    editor.on('load', () => {
      const dropdownElement = document.querySelector('[data-dropdown-toggle="dropdown"]');
      const dropdownMenu = document.getElementById('dropdown');

      if (dropdownElement && dropdownMenu) {
        dropdownElement.addEventListener('click', (event) => {
          dropdownMenu.classList.toggle('hidden');
          event.stopPropagation(); // Mencegah event bubble agar tidak menutup dropdown segera
        });

        // Menutup dropdown jika klik di luar
        document.addEventListener('click', (event) => {
          if (!dropdownElement.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
          }
        });
      }
    });

    const toggleDropdownScript = function () {
      const dropdown = this.querySelector('#dropdown'); // Mengakses elemen dropdown
      const button = this.querySelector('#dropdownDefaultButton'); // Mengakses tombol dropdown

      if (dropdown && button) {
        button.addEventListener('click', function () {
          if (dropdown.classList.contains('hidden')) {
            dropdown.classList.remove('hidden');
            dropdown.classList.add('block');
          } else {
            dropdown.classList.remove('block');
            dropdown.classList.add('hidden');
          }
        });
      }

      console.log('Element:', this); // this mengacu pada elemen komponen
    };

    editor.Components.addType('dropdown-with-toggle', {
      model: {
        defaults: {
          script: toggleDropdownScript,
          traits: [
            {
              type: 'text',
              label: 'Button Text',
              name: 'buttonText',
              changeProp: 1,
            },
            {
              type: 'textarea',
              label: 'Dropdown Items',
              name: 'dropdownItems',
              changeProp: 1,
              placeholder: 'Comma separated values (e.g. Dashboard,Settings,Earnings,Sign out)',
            }
          ],
          // Konten HTML untuk dropdown
          content: `
            <div class="relative flex justify-center items-center"> <!-- Menjadikan parent relative -->
              <div>
                <button id="dropdownDefaultButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Dropdown button 
                  <svg class="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <div id="dropdown" class="hidden absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"> <!-- Posisi absolut di tengah -->
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          // Tambahkan beberapa style default untuk komponen
          style: {
            'margin': '10px',
            'padding': '10px',
            'border': '1px solid #ddd',
          },
        },

        init() {
          // Update teks tombol dan dropdown saat properti berubah
          this.listenTo(this, 'change:buttonText', this.updateButtonText);
          this.listenTo(this, 'change:dropdownItems', this.updateDropdownItems);
        },

        updateButtonText() {
          const buttonText = this.get('buttonText') || 'Dropdown button';
          const button = this.view.el.querySelector('#dropdownDefaultButton');
          if (button) {
            button.innerHTML = `${buttonText} 
              <svg class="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>`;
          }
        },

        updateDropdownItems() {
          const items = this.get('dropdownItems') || 'Dashboard,Settings,Earnings,Sign out';
          const itemList = items.split(',');
          const dropdown = this.view.el.querySelector('#dropdown ul');
          if (dropdown) {
            dropdown.innerHTML = itemList
              .map(item =>
                `<li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${item.trim()}</a></li>`
              )
              .join('');
          }
        },
      },
    });

    // Buat block untuk komponen baru yang bisa ditambahkan ke editor
    editor.Blocks.add('dropdown-toggle-block', {
      label: 'Dropdown with Toggle (Centered)',
      attributes: { class: 'fa fa-toggle-down' }, // Ikon blok
      content: { type: 'dropdown-with-toggle' }, // Konten blok yang merupakan tipe komponen kustom
      category: 'Blocks'
    });

    editor.Components.addType('checkbox-simple', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              label: 'Checkbox Label',
              name: 'checkboxLabel',
              changeProp: 1,
            },
          ],
          // Konten HTML untuk checkbox
          content: `
            <div class="flex items-center">
              <input type="checkbox" id="checkboxInput" class="form-checkbox h-4 w-4 text-blue-600" />
              <label id="checkboxLabel" for="checkboxInput" class="ml-2 cursor-pointer text-gray-700">
                Checkbox Label
              </label>
            </div>
          `,
          // Tambahkan beberapa style default untuk komponen
          style: {
            'margin': '10px',
            'padding': '10px',
            'border': '1px solid #ddd',
          },
        },

        init() {
          // Update label saat properti berubah
          this.listenTo(this, 'change:checkboxLabel', this.updateCheckboxLabel);
        },

        updateCheckboxLabel() {
          const labelText = this.get('checkboxLabel') || 'Checkbox Label';
          const label = this.view.el.querySelector('#checkboxLabel');
          if (label) {
            label.innerHTML = labelText;
          }
        },
      },
    });

    // Buat block untuk komponen baru yang bisa ditambahkan ke editor
    editor.Blocks.add('checkbox-simple-block', {
      label: 'Checkbox',
      attributes: { class: 'fa fa-check-square' }, // Ikon blok
      content: { type: 'checkbox-simple' }, // Konten blok yang merupakan tipe komponen kustom
      category: 'Forms',
    });

    editor.BlockManager.add('form-block', {
      label: `
        <div class="flex flex-col items-center">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='white'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 7h18'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 11h10'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 15h10'/></svg>" 
          alt="Form Logo" class="inline-block h-8 w-8 mb-4" /> 
          <span>Form</span>
        </div>
      `,
      content: `
        <form class="form-block p-4 border rounded shadow-md bg-white">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nama:</label>
            <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Pesan:</label>
            <textarea id="message" name="message" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kirim</button>
        </form>
      `,
      category: 'Forms'
    });

    // Jika Anda ingin menyimpan data saat formulir dikirim
    editor.on('form:submit', (formData) => {
      console.log('Data formulir:', formData);
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div>
      <div id="gjs" style={{ border: '1px solid #ddd' }}></div>
    </div>
  );
};

export default GrapesJSEditor;
