window.editorConfig = {
    height: 500,
    toolbar: 'undo redo | bold italic',
    menubar: false,
    init_instance_callback: function (editor) {
        editor.setContent('<b>testy testy</b>');
    }
};