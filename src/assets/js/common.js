import router from '../../router/index.js'
export default {
    changeView(url, queryParams) {
        router.push({
            path: url,
            query: queryParams,
        })
    },
    info(message) {
        var div = document.createElement("div");
        div.innerHTML = `    <svg style="display: none;">
                                <symbol id="info-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </symbol>
                            </svg>
                            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                                <div id="liveToastInfo" class="alert alert-primary d-inline-block fade" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <svg class="bi flex-shrink-0 me-2" style="width:20px;height:20px;" role="img" aria-label="Info:">
                                        <use xlink:href="#info-fill" />
                                    </svg>
                                    <span>`+ message + `</span>
                                </div>
                            </div>
                        `
        document.body.appendChild(div);
        document.body.insertBefore(div, document.body.firstElementChild);
        const toast = new Toast(document.getElementById('liveToastInfo'))
        return toast.show()
    },
    success(message) {
        var div = document.createElement("div");
        div.innerHTML = `    <svg style="display: none;">
                                <symbol id="check-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </symbol>
                            </svg>

                            <!-- 成功訊息 -->
                            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                                <div id="liveToastSuccess" class="alert alert-success d-inline-block fade" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <svg class="bi flex-shrink-0 me-2" role="img" style="width:20px;height:20px;" aria-label="Success:">
                                        <use xlink:href="#check-circle-fill" />
                                    </svg>
                                    <span>`+ message + `</span>
                                </div>
                            </div>
                        `
        document.body.appendChild(div);
        document.body.insertBefore(div, document.body.firstElementChild);
        const toast = new Toast(document.getElementById('liveToastSuccess'))
        return toast.show()
    },
    warning(message) {
        var div = document.createElement("div");
        div.innerHTML = `    <svg style="display: none;">
                                <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </symbol>
                            </svg>

                            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                                <div id="liveToastWarning" class="alert alert-warning d-inline-block fade" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <svg class="bi flex-shrink-0 me-2" style="width:20px;height:20px;" role="img" aria-label="Warning:">
                                        <use xlink:href="#exclamation-triangle-fill" />
                                    </svg>
                                    <span>`+ message + `</span>
                                </div>
                            </div>
                        `
        document.body.appendChild(div);
        document.body.insertBefore(div, document.body.firstElementChild);
        const toast = new Toast(document.getElementById('liveToastWarning'))
        return toast.show()
    },
    error(message) {
        var div = document.createElement("div");
        div.innerHTML = `    
        <svg style="display: none;">
            <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                <path
                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </symbol>
        </svg>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToastError" class="alert alert-danger d-inline-block fade" role="alert" aria-live="assertive"
                aria-atomic="true">
                <svg class="bi flex-shrink-0 me-2" style="width:20px;height:20px;" role="img" aria-label="Danger:">
                    <use xlink:href="#exclamation-triangle-fill" />
                </svg>
                <span>`+ message + `</span>
            </div>
        </div>`
        document.body.appendChild(div);
        document.body.insertBefore(div, document.body.firstElementChild);
        const toast = new Toast(document.getElementById('liveToastError'))
        return toast.show()
    }
}